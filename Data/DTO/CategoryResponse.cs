using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data.DTO
{
    public class CategoryResponse : EntityBase
    {
        public string Name { get; set; }
        public long? ParentCategoryID { get; set; }
        public string ParentCategoryName { get; set; }
    }
}
