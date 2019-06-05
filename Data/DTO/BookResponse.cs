namespace BooksStoreSPA.Data.DTO
{
    public class BookResponse : BookDTO
    {
        public string CategoryName { get; set; }
        public string SubcategoryName { get; set; }
        public string PublisherName { get; set; }
    }
}
