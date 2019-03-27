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
        PagedList<Category> GetCategories(QueryOptions options);
    }
}
