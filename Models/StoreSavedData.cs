using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;

namespace BooksStoreSPA.Models
{
    public class StoreSavedData
    {
        public List<Publisher> Publishers { get; set; }
        public List<Category> Categories { get; set; }
        public List<Category> ParentCategories { get; set; }
        public List<Book> Books { get; set; }
    }
}
