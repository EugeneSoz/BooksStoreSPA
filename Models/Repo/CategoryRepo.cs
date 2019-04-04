﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Models.Repo
{
    public class CategoryRepo : BaseRepo<Category>, ICategoryRepo
    {
        public CategoryRepo(StoreDbContext ctx) : base(ctx) { }

        public async Task<Category> GetCategoryAsync(long id)
        {
            IQueryable<Category> categories = GetEntities();
            IQueryable<Book> books = Context.Books.OrderBy(b => b.Title);

            Category result = await categories
                .GroupJoin(books, c => c.Id, b => b.CategoryID, (c, relbooks) =>
                new Category
                {
                    Id = c.Id,
                    Name = c.Name,
                    ParentCategoryID = c.ParentCategoryID,
                    Books = relbooks.ToList()
                })
                .SingleOrDefaultAsync(p => p.Id == id);

            return result;
        }

        public async Task<PagedList<CategoryResponse>> GetCategoriesAsync(QueryOptions options)
        {
            //SetCapitalLetterInProps(options);
            //QueryProcessing<Category> processing;

            //IQueryable<Category> subcategories;
            //IQueryable<Category> categories;
            //IQueryable<Category> query = GetEntities();

            //if (options.SearchPropertyName == nameof(CategoryResponse.ParentCategoryName) ||
            //    options.SortPropertyName == nameof(CategoryResponse.ParentCategoryName))
            //{
            //    ResolveNames(options);
            //    processing = new QueryProcessing<Category>(options);
            //    subcategories = options.DescendingOrder 
            //        ? query.OrderByDescending(s => s.Name) 
            //        : query.OrderBy(s => s.Name);
            //    categories = processing.ProcessQuery(query);
            //}
            //else
            //{
            //    //когда сортируем ищем по подкатегории
            //    processing = new QueryProcessing<Category>(options);
            //    subcategories = processing.ProcessQuery(query);
            //    categories = query;
            //}

            //IQueryable<CategoryResponse> result = subcategories
            //        .Join(categories, s => s.ParentCategoryID, c => c.Id,
            //        (s, c) => new CategoryResponse
            //        {
            //            Id = s.Id,
            //            Name = s.Name,
            //            ParentCategoryID = c.Id,
            //            ParentCategoryName = c.Name
            //        });

            QueryProcessing<Category> processing = new QueryProcessing<Category>(options);

            IQueryable<Category> query = GetEntities()
                .Where(s => s.ParentCategoryID != null)
                .Include(s => s.ParentCategory);

            IQueryable<CategoryResponse> processedCategories;

            if (options.SortPropertyName == $"{nameof(Category.ParentCategory)}.{nameof(Category.Name)}")
            {
                processedCategories = options.DescendingOrder
                    ? processing.ProcessQuery(query.OrderByDescending(c => c.Name))
                        .Select(e => e.MapCategoryResponse())
                    : processing.ProcessQuery(query.OrderBy(c => c.Name))
                        .Select(e => e.MapCategoryResponse());
            }
            else
            {
                processedCategories = processing.ProcessQuery(query)
                    .Select(e => e.MapCategoryResponse());
            }

            PagedList<CategoryResponse> pagedList = await Task.Run(() => 
                new PagedList<CategoryResponse>(processedCategories, options));

            return pagedList;
        }

        public async Task<List<Category>> GetStoreCategoriesAsync()
        {
            IQueryable<Category> query = GetEntities();
            IQueryable<Category> processedCategories = query
                .Where(c => c.ParentCategoryID == null)
                .GroupJoin(query.OrderBy(s => s.Name),
                    c => c.Id, s => s.ParentCategoryID, 
                    (c, subcategories) => new { c, subcategories })
                .OrderBy(joined => joined.c.Name)
                .Select(joined => new Category {
                    Id = joined.c.Id,
                    Name = joined.c.Name,
                    ChildrenCategories = joined.subcategories.ToList()
                });

            List<Category> categories = await processedCategories.ToListAsync();

            return categories;
        }
    }
}