using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Models;

namespace BooksStoreSPA.Data.DTO
{
    public class PagedResponse<T>
    {
        public List<T> Entities { get; set; }
        public Pagination Pagination { get; set; }
        public List<int> PageNumbers { get; set; }
    }
}
