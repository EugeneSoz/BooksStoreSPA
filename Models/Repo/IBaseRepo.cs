using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Models.Repo
{
    //интерфейс для базового класса репозитория
    public interface IBaseRepo<T>
    {
        Task<T> GetOneAsync(long id, string propName);
        Task<IQueryable<T>> GetAllAsync(string propName = null);
        Task<T> AddAsync(T entity);
        Task<bool> UpdateAsync(T entity);
        Task<bool> DeleteAsync(T entity);
    }
}
