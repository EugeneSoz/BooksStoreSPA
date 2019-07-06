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
        Task<Category> GetCategoryAsync(long id);
        Task<PagedList<CategoryResponse>> GetCategoriesAsync(QueryOptions options);
        Task<List<StoreCategoryResponse>> GetStoreCategoriesAsync();
        Task<List<Category>> GetParentCategoriesAsync();
        Task<bool> DeleteAsync(long parentCategoryId);
    }
}
