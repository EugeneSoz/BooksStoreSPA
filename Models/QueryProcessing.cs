using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Models
{
    public class QueryProcessing<T>
    {
        private readonly QueryOptions _options;

        public QueryProcessing(QueryOptions options)
        {
            _options = options;
        }

        public IQueryable<T> ProcessQuery(IQueryable<T> query)
        {
            if (!string.IsNullOrEmpty(_options.SearchPropertyName)
                && !string.IsNullOrEmpty(_options.SearchTerm))
            {
                return Search(query, _options.SearchPropertyName, _options.SearchTerm);
            }
            else if (!string.IsNullOrEmpty(_options.FilterPropertyName)
                && _options.FilterPropertyValue != null)
            {
                return Filter(query, _options.FilterPropertyName, _options.FilterPropertyValue);
            }
            else if (!string.IsNullOrEmpty(_options.SortPropertyName))
            {
                return Order(query, _options.SortPropertyName, _options.DescendingOrder);
            }
            else
            {
                return query;
            }
        }

        private IQueryable<T> Search(IQueryable<T> query, string propertyName, string searchTerm)
        {
            ParameterExpression pe = Expression.Parameter(typeof(T), "x");
            MemberExpression source = Expression.Property(pe, propertyName);
            ConstantExpression constant = Expression.Constant(searchTerm, typeof(string));

            MethodCallExpression body = Expression.Call(source, "Contains", Type.EmptyTypes, constant);
            var lambda = Expression.Lambda<Func<T, bool>>(body, pe);

            return query.Where(lambda);
        }

        private IQueryable<T> Filter(IQueryable<T> query, string propertyName, long? value)
        {
            ParameterExpression pe = Expression.Parameter(typeof(T), "x");
            MemberExpression source = Expression.Property(pe, propertyName);
            ConstantExpression constant = Expression.Constant(value, typeof(long?));
            BinaryExpression equality = Expression.Equal(source, constant);

            MethodCallExpression body = Expression.Call(source, "Where", Type.EmptyTypes, equality);
            var lambda = Expression.Lambda<Func<T, bool>>(body, pe);

            return query.Where(lambda);
        }

        private IQueryable<T> Order(IQueryable<T> query, string propertyName, bool desc)
        {
            ParameterExpression pe = Expression.Parameter(typeof(T), "x");
            MemberExpression source = Expression.Property(pe, propertyName);

            LambdaExpression lambda = Expression.Lambda(typeof(Func<,>).MakeGenericType(typeof(T), source.Type),
                source, pe);

            return typeof(Queryable).GetMethods().Single(
                method => method.Name == (desc ? "OrderByDescending" : "OrderBy")
                && method.IsGenericMethodDefinition
                && method.GetGenericArguments().Length == 2
                && method.GetParameters().Length == 2)
                .MakeGenericMethod(typeof(T), source.Type)
                .Invoke(null, new object[] { query, lambda }) as IQueryable<T>;
        }
    }
}
