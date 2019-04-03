using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Models.Repo
{
    public interface ICategoryRepo : IBaseRepo<Category>
    {
        Task<PagedList<CategoryResponse>> GetCategoriesAsync(QueryOptions options);
        Task<List<Category>> GetStoreCategoriesAsync();
    }
}
