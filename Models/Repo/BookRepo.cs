using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Models.Repo
{
    public class BookRepo : BaseRepo<Book>, IBookRepo
    {
        public BookRepo(StoreDbContext ctx) : base(ctx) { }

        public async Task<Book> GetBookAsync(long id)
        {
            IQueryable<Book> entities = GetEntities();

            IQueryable<Book> book = entities
                .Include(p => p.Publisher)
                .Include(c => c.Category)
                .ThenInclude(c => c.ParentCategory);

            Book result = await book.SingleOrDefaultAsync(b => b.Id == id);
            result.Publisher.Books = null;
            result.Category.Books = null;
            result.Category.ParentCategory.ChildrenCategories = null;
            result.Category.ParentCategory.Books = null;

            return result;
        }

        public async Task<PagedList<BookResponse>> GetBooksAsync(QueryOptions options)
        {
            QueryProcessing<Book> processing = new QueryProcessing<Book>(options);

            IQueryable<Book> query = GetEntities()
                .Include(p => p.Publisher)
                .Include(c => c.Category)
                .ThenInclude(c => c.ParentCategory);

            IQueryable<BookResponse> processedBooks;

            if (options.SortPropertyName == $"{nameof(Publisher)}.{nameof(Publisher.Name)}" ||
                options.SortPropertyName == $"{nameof(Category)}.{nameof(Category.Name)}" ||
                options.SortPropertyName == 
                    $"{nameof(Category)}.{nameof(Category.ParentCategory)}.{nameof(Category.Name)}")
            {
                processedBooks = options.DescendingOrder
                    ? processing.ProcessQuery(query.OrderByDescending(b => b.Title))
                        .Select(e => e.MapBookResponse())
                    : processing.ProcessQuery(query.OrderBy(b => b.Title))
                        .Select(e => e.MapBookResponse());
            }
            else
            {
                processedBooks = processing.ProcessQuery(query)
                    .Select(e => e.MapBookResponse());
            }

            PagedList<BookResponse> books = await Task.Run(() => 
                new PagedList<BookResponse>(processedBooks, options));

            return books;
        }
    }
}
