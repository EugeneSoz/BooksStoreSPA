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
        private readonly IBaseRepo<Category> _repo;

        public CategoryController(IBaseRepo<Category> repo) => _repo = repo;

        [HttpGet("category/{id}")]
        public async Task<Category> GetCategoryAsync(long id)
        {
            Category category = await _repo.GetOneAsync(id, nameof(Publisher.Books));

            category.Books.ForEach(b => b.Category = null);

            return category;
        }

        [HttpPost("categories")]
        public async Task<PagedResponse<Category>> GetCategoriesAsync(QueryOptions options)
        {
            IQueryable<Category> entities = await _repo.GetAllAsync();

            entities = entities.Include(c => c.ParentCategory);
            PagedList<Category> categories = new PagedList<Category>(entities, options);
            foreach (Category category in categories.Entities)
            {
                if (category.ParentCategory != null)
                {
                    category.ParentCategory.ChildernCategories = null;
                }
            }

            return categories.MapPagedResponse();
        }

        [HttpGet("storecategories")]
        public async Task<List<Category>> GetStoreCategoriesAsync()
        {
            IQueryable<Category> entities = await _repo.GetAllAsync();

            entities = entities.Where(e => e.ParentCategoryID == null)
                .Include(c => c.ChildernCategories);
            List<Category> categories = await entities.ToListAsync();
            foreach (Category category in categories)
            {
                if (category.ChildernCategories.Count > 0)
                {
                    category.ChildernCategories.ForEach(cc => cc.ParentCategory = null);
                }
            }

            return categories;
        }
    }
}
