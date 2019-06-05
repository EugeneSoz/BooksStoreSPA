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
                Id = book.Id,
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
                CategoryName = book.Category.ParentCategory.Name,
                SubcategoryName = book.Category.Name,
                PublisherName = book.Publisher.Name
            };
        }

        public static CategoryResponse MapCategoryResponse(this Category category)
        {
            return new CategoryResponse
            {
                Id = category.Id,
                Name = category.Name,
                ParentCategoryID = category.ParentCategory?.Id ?? null,
                ParentCategoryName = category.ParentCategory?.Name ?? "",
                DisplayedName = category.DisplayedName
            };
        }

        public static PagedResponse<T> MapPagedResponse<T>(this PagedList<T> response)
        {
            List<int> numbers = new List<int>();
            for (int i = response.LeftBoundary; i <= response.RightBoundary; i++)
            {
                numbers.Add(i);
            }

            return new PagedResponse<T>
            {
                Entities = response.Entities ?? new List<T>(),
                Pagination = new Pagination
                {
                    CurrentPage = response.CurrentPage,
                    PageSize = response.PageSize,
                    TotalPages = response.TotalPages,
                    HasPreviousPage = response.HasPreviousPage,
                    HasNextPage = response.HasNextPage,
                    LeftBoundary = response.LeftBoundary,
                    RightBoundary = response.RightBoundary
                },
                PageNumbers = numbers
            };
        }
    }
}
