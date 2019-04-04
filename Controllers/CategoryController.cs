﻿using System;
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
    public class CategoryController : BaseController
    {
        private readonly ICategoryRepo _repo;

        public CategoryController(ICategoryRepo repo) => _repo = repo;

        [HttpGet("category/{id}")]
        public async Task<Category> GetCategoryAsync(long id)
        {
            return await _repo.GetCategoryAsync(id);
        }

        [HttpPost("categories")]
        public async Task<PagedResponse<CategoryResponse>> GetCategoriesAsync(
            [FromBody] QueryOptions options)
        {
            PagedList<CategoryResponse> categories = await _repo.GetCategoriesAsync(options);

            return categories.MapPagedResponse();
        }

        [HttpGet("storecategories")]
        public async Task<List<Category>> GetStoreCategoriesAsync()
        {
            return await _repo.GetStoreCategoriesAsync();
        }

        [HttpPost("create")]
        public async Task<ActionResult> CreateCategoryAsync([FromBody] Category category)
        {
            return await CreateAsync(category, _repo.AddAsync);
        }

        [HttpPut("update")]
        public async Task<ActionResult> UpdateCategoryAsync([FromBody] Category category)
        {
            return await UpdateAsync(category, _repo.UpdateAsync);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> DeleteCategoryAsync([FromBody] Category category)
        {
            return await DeleteAsync(category, _repo.DeleteAsync);
        }
    }
}