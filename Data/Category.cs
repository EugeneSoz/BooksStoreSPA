using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data
{
    //класс, описывающий категорию книги
    public class Category : EntityBase
    {
        //название категории основной категории книги
        [Required(ErrorMessage = "Укажите название категории/подкатегории")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Название должно быть не меньше 2 и не больше 100 символов")]
        public string Name { get; set; } = string.Empty;

        //если свойство не равно null, тогда категория является подкатегорией
        public long? ParentCategoryID { get; set; }
        public Category ParentCategory { get; set; }
        public List<Category> ChildrenCategories { get; set; }
        public List<Book> Books { get; set; }
    }
}
