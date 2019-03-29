﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Models.Repo
{
    public interface ICategoryRepo : IBaseRepo<Category>
    {
        PagedList<CategoryResponse> GetCategories(QueryOptions options);
        List<Category> GetStoreCategories();
    }
}
