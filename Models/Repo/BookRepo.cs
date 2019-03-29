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

        public PagedList<BookResponse> GetBooks(QueryOptions options)
        {
            SetCapitalLetterInProps(options);
            ResolveNames(options);
            QueryProcessing<Book> processing = new QueryProcessing<Book>(options);

            IQueryable<Book> query = GetEntities()
                .Include(p => p.Publisher)
                .Include(c => c.Category)
                .ThenInclude(c => c.ParentCategory);

            IQueryable<BookResponse> processedBooks;

            if (options.SortPropertyName == $"{nameof(Publisher)}.{nameof(Publisher.Name)}" ||
                options.SortPropertyName == $"{nameof(Category)}.{nameof(Category.Name)}" ||
                options.SortPropertyName == $"{nameof(Category)}.{nameof(Category.ParentCategory)}.{nameof(Category.Name)}")
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

            PagedList<BookResponse> books = new PagedList<BookResponse>(processedBooks, options);

            return books;
        }

        private void ResolveNames(QueryOptions options)
        {
            if (options.SearchPropertyName == nameof(BookResponse.PublisherName))
            {
                options.SearchPropertyName = $"{nameof(Publisher)}.{nameof(Publisher.Name)}";
            }

            if (options.SortPropertyName == nameof(BookResponse.PublisherName))
            {
                options.SortPropertyName = $"{nameof(Publisher)}.{nameof(Publisher.Name)}";
            }

            if (options.SearchPropertyName == nameof(BookResponse.CategoryName))
            {
                options.SearchPropertyName = $"{nameof(Category)}.{nameof(Category.Name)}";
            }

            if (options.SortPropertyName == nameof(BookResponse.CategoryName))
            {
                options.SortPropertyName = $"{nameof(Category)}.{nameof(Category.Name)}";
            }

            if (options.SearchPropertyName == nameof(BookResponse.ParentCategoryName))
            {
                options.SearchPropertyName = $"{nameof(Category)}.{nameof(Category.ParentCategory)}.{nameof(Category.Name)}";
            }

            if (options.SortPropertyName == nameof(BookResponse.ParentCategoryName))
            {
                options.SortPropertyName = $"{nameof(Category)}.{nameof(Category.ParentCategory)}.{nameof(Category.Name)}";
            }
        }
    }
}
