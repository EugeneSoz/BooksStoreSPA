using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data
{
    //класс определяющий издателя книг
    public class Publisher : EntityBase
    {
        //название издательства
        [Required(ErrorMessage = "Укажите название издательства")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Название должно быть не меньше 2 и не больше 100 символов")]
        public string Name { get; set; } = string.Empty;
        //страна происхождения
        public string Country { get; set; }
        public List<Book> Books { get; set; }
    }
}
