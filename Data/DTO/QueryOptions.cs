using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data.DTO
{
    public class QueryOptions
    {
        public QueryOptions()
        {
            ResetToDefault();
        }

        public int CurrentPage { get; set; } = 1;
        public int PageSize { get; set; } = 12;


        //свойство по которому сортируем
        public string SortPropertyName { get; set; }
        //сортировка по убыванию
        public bool DescendingOrder { get; set; }
        //по какому св-ву поиск
        public string SearchPropertyName { get; set; }
        //что ищем
        public string SearchTerm { get; set; }
        //по какому св-ву фильтруем
        public string FilterPropertyName { get; set; }
        //id категории книги
        public long? FilterPropertyValue { get; set; }

        public void ResetToDefault()
        {
            SortPropertyName = string.Empty;
            DescendingOrder = false;
            SearchPropertyName = string.Empty;
            SearchTerm = string.Empty;
            FilterPropertyName = string.Empty;
            FilterPropertyValue = null;
        }
    }
}
