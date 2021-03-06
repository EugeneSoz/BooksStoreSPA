﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data.DTO
{
    //класс содержит элементы списка в панели Toolbar
    public class ListItem
    {
        public ListItem(string propertyName, string name, 
            bool descendingOrder = false, bool hasDivider = false, string href = "#")
        {
            PropertyName = propertyName;
            Name = name;
            DescendingOrder = descendingOrder;
            HasDivider = hasDivider;
            Href = href;
        }
        public string PropertyName { get; set; }
        public string Name { get; set; }
        public bool DescendingOrder { get; set; }
        public bool HasDivider { get; set; }
        public string Href { get; set; }
    }

    public class Dropdown
    {
        public List<ListItem> SortingProperties => new List<ListItem>
        {
            new ListItem("", "Сортировать по", false),
            new ListItem(nameof(BookResponse.Title), "Названию: А - Я"),
            new ListItem(nameof(BookResponse.Title), "Названию: Я - А", true),
            new ListItem(nameof(BookResponse.Price), "Цене: мин. - макс."),
            new ListItem(nameof(BookResponse.Price), "Цене: макс. - мин.", true)
        };
        public List<ListItem> GridSizeProperties => new List<ListItem>
        {
            new ListItem("", "Отобразить", false),
            new ListItem("SixByTwo", "6 x 2 (строка x столбец)"),
            new ListItem("FourByThree", "4 x 3 (строка x столбец)"),
            new ListItem("ThreeByFour", "3 x 4 (строка x столбец)")
        };
    }
}
