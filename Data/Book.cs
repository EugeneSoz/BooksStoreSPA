using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Data
{
    //класс, описывающий книгу
    public class Book : BookDTO
    {
        public Category Category { get; set; }
        public Publisher Publisher { get; set; }
    }
}
