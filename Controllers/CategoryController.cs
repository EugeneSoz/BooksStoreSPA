using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Infrastructure;
using BooksStoreSPA.Models;
using BooksStoreSPA.Models.Repo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepo _repo;

        public CategoryController(ICategoryRepo repo) => _repo = repo;

        [HttpGet("category/{id}")]
        public async Task<Category> GetCategoryAsync(long id)
        {
            Category category = await _repo.GetOneAsync(id, nameof(Publisher.Books));

            category.Books.ForEach(b => b.Category = null);

            return category;
        }

        [HttpPost("categories")]
        public PagedResponse<CategoryResponse> GetCategoriesAsync(QueryOptions options)
        {
            PagedList<CategoryResponse> categories = _repo.GetCategories(options);

            return categories.MapPagedResponse();
        }

        [HttpGet("storecategories")]
        public List<Category> GetStoreCategoriesAsync()
        {
            return _repo.GetStoreCategories();
        }
    }
}
