using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Models;

namespace BooksStoreSPA.Infrastructure
{
    public static class EntityExtensions
    {
        public static BookResponse MapBookResponse(this Book book)
        {
            return new BookResponse
            {
                ID = book.ID,
                Title = book.Title,
                Authors = book.Authors,
                Year = book.Year,
                Language = book.Language,
                PageCount = book.PageCount,
                Description = book.Description,
                Price = book.Price,
                BookCover = book.BookCover,
                CategoryID = book.CategoryID,
                PublisherID = book.PublisherID,
                ParentCategoryName = book.Category.ParentCategory.Name,
                CategoryName = book.Category.Name,
                PublisherName = book.Publisher.Name
            };
        }

        public static PagedResponse<T> MapPagedResponse<T>(this PagedList<T> response)
        {
            return new PagedResponse<T>
            {
                Entities = response.Entities ?? new List<T>(),
                CurrentPage = response.CurrentPage,
                PageSize = response.PageSize,
                TotalPages = response.TotalPages,
                HasPreviousPage = response.HasPreviousPage,
                HasNextPage = response.HasNextPage,
                LeftBoundary = response.LeftBoundary,
                RightBoundary = response.RightBoundary
            };
        }
    }
}
