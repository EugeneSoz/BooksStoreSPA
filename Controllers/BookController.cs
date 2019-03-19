using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Infrastructure;
using BooksStoreSPA.Models;
using BooksStoreSPA.Models.Repo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBaseRepo<Book> _repo;

        public BookController(IBaseRepo<Book> repo) => _repo = repo;

        [HttpGet("book/{id}")]
        public async Task<BookResponse> GetBookAsync(long id)
        {
            IQueryable<Book> entities = await _repo.GetAllAsync();

            IQueryable<BookResponse> bookResponse = entities
                .Include(p => p.Publisher)
                .Include(c => c.Category)
                .ThenInclude(c => c.ParentCategory)
                .Select(e => e.MapBookResponse());

            return bookResponse.ToList().SingleOrDefault(b => b.ID == id);
        }

        [HttpPost("books")]
        public async Task<PagedResponse<BookResponse>> GetBooksAsync(QueryOptions options)
        {
            IQueryable<Book> entities = await _repo.GetAllAsync();

            IQueryable<BookResponse> bookResponse = entities
                .Include(p => p.Publisher)
                .Include(c => c.Category)
                .ThenInclude(c => c.ParentCategory)
                .Select(e => e.MapBookResponse());

            PagedList<BookResponse> books = new PagedList<BookResponse>(bookResponse, options);

            return books.MapPagedResponse();
        }
    }
}
