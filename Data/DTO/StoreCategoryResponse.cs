using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data.DTO
{
    public class StoreCategoryResponse : CategoryDTO
    {
        //id элемента html разметки
        public string ControlId { get; set; }
        //родительская категория
        public bool IsParent { get; set; }
        //имеются ли дочернии категории
        public bool HasChildren { get; set; }
        //скрыты ли дочернии категории
        public bool IsCollapsed { get; set; } = true;
        public List<StoreCategoryResponse> Children { get; set; }
    }
}
