using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data.DTO
{
    public class BookResponse : EntityBase
    {
        public string Title { get; set; }
        public string Authors { get; set; }
        public int Year { get; set; }
        public string Language { get; set; }
        public int PageCount { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string BookCover { get; set; }
        public long? CategoryID { get; set; }
        public long? PublisherID { get; set; }
        public string CategoryName { get; set; }
        public string SubcategoryName { get; set; }
        public string PublisherName { get; set; }
    }
}
