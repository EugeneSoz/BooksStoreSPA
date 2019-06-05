using System.Collections.Generic;
using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Data
{
    public class Publisher : PublisherDTO
    {
        public List<Book> Books { get; set; }
    }
}
