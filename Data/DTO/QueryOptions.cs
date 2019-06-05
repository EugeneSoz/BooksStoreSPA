﻿namespace BooksStoreSPA.Data.DTO
{
    public class QueryOptions
    {
        private string _sortPropertyName;
        private string _filterPropertyName;
        private string[] _searchPropertyNames;

        public int CurrentPage { get; set; } = 1;
        public int PageSize { get; set; } = 12;


        //свойство по которому сортируем
        public string SortPropertyName
        {
            get => _sortPropertyName;
            set
            {
                _sortPropertyName = GetValueWithCapitalLetter(value);
                _sortPropertyName = ResolveSearchSortingPropertyName(_sortPropertyName);
            }
        }
        //сортировка по убыванию
        public bool DescendingOrder { get; set; }
        //по какому св-ву поиск
        public string[] SearchPropertyNames
        {
            get => _searchPropertyNames;
            set
            {
                _searchPropertyNames = value;
                if (_searchPropertyNames != null && _searchPropertyNames.Length > 0)
                {
                    for (int i = 0; i < _searchPropertyNames.Length; i++)
                    {
                        _searchPropertyNames[i] = GetValueWithCapitalLetter(_searchPropertyNames[i]);
                        _searchPropertyNames[i] = ResolveSearchSortingPropertyName(_searchPropertyNames[i]);
                    }
                }
            }
        }
        //что ищем
        public string SearchTerm { get; set; }
        //по какому св-ву фильтруем
        public string FilterPropertyName
        {
            get => _filterPropertyName;
            set
            {
                _filterPropertyName = GetValueWithCapitalLetter(value);
                _filterPropertyName = ResolveFilterPropertyName(_filterPropertyName);
            }
        }
        //id категории книги
        public long FilterPropertyValue { get; set; }

        private string GetValueWithCapitalLetter(string valueToChange)
        {
            if (!string.IsNullOrEmpty(valueToChange))
            {
                return valueToChange[0].ToString().ToUpper() + valueToChange.Substring(1);
            }
            else
            {
                return valueToChange;
            }
        }

        private string ResolveSearchSortingPropertyName(string valueToChange)
        {
            switch (valueToChange)
            {
                case nameof(CategoryResponse.ParentCategoryName):
                    return $"{nameof(CategoryDTO.ParentCategory)}.{nameof(CategoryDTO.Name)}";
                case nameof(BookResponse.PublisherName):
                    return $"{nameof(PublisherDTO)}.{nameof(PublisherDTO.Name)}";
                case nameof(BookResponse.SubcategoryName):
                    return $"{nameof(CategoryDTO)}.{nameof(CategoryDTO.Name)}";
                case nameof(BookResponse.CategoryName):
                    return $"{nameof(CategoryDTO)}.{nameof(CategoryDTO.ParentCategory)}.{nameof(CategoryDTO.Name)}";
                default:
                    return valueToChange;
            }
        }

        private string ResolveFilterPropertyName(string valueToChange)
        {
            switch (valueToChange)
            {
                case nameof(BookResponse.SubcategoryName):
                    return $"{nameof(CategoryDTO)}.{nameof(CategoryDTO.Id)}";
                case nameof(BookResponse.CategoryName):
                    return $"{nameof(CategoryDTO)}.{nameof(CategoryDTO.ParentCategory)}.{nameof(CategoryDTO.Id)}";
                default:
                    return valueToChange;
            }
        }
    }
}
