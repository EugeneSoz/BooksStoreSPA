namespace BooksStoreSPA.Data.DTO
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
                _sortPropertyName = ResolveSearchSortingPropertyName(value);
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
                _filterPropertyName = ResolveFilterPropertyName(value);
            }
        }
        //id категории книги
        public long FilterPropertyValue { get; set; }

        private string ResolveSearchSortingPropertyName(string valueToChange)
        {
            switch (valueToChange)
            {
                case nameof(CategoryResponse.ParentCategoryName):
                    return $"{nameof(Category.ParentCategory)}.{nameof(Category.Name)}";
                case nameof(BookResponse.PublisherName):
                    return $"{nameof(Publisher)}.{nameof(Publisher.Name)}";
                case nameof(BookResponse.SubcategoryName):
                    return $"{nameof(Category)}.{nameof(Category.Name)}";
                case nameof(BookResponse.CategoryName):
                    return $"{nameof(Category)}.{nameof(Category.ParentCategory)}.{nameof(Category.Name)}";
                default:
                    return valueToChange;
            }
        }

        private string ResolveFilterPropertyName(string valueToChange)
        {
            switch (valueToChange)
            {
                case nameof(BookResponse.SubcategoryName):
                    return $"{nameof(Category)}.{nameof(Category.Id)}";
                case nameof(BookResponse.CategoryName):
                    return $"{nameof(Category)}.{nameof(Category.ParentCategory)}.{nameof(Category.Id)}";
                default:
                    return valueToChange;
            }
        }
    }
}
