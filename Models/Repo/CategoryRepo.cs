using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Models.Repo
{
    public class CategoryRepo : BaseRepo<Category>, ICategoryRepo
    {
        public CategoryRepo(StoreDbContext ctx) : base(ctx) { }

        public PagedList<Category> GetCategories(QueryOptions options)
        {
            throw new NotImplementedException();
        }
    }
}
