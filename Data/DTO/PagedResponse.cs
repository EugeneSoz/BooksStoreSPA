using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data.DTO
{
    public class PagedResponse<T>
    {
        public List<T> Entities { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public bool HasPreviousPage { get; set; }
        public bool HasNextPage { get; set; }
        public int LeftBoundary { get; set; }
        public int RightBoundary { get; set; }
    }
}
