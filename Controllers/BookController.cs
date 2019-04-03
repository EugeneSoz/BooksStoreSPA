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
        private readonly IBookRepo _repo;

        public BookController(IBookRepo repo) => _repo = repo;

        [HttpGet("book/{id}")]
        public BookResponse GetBook(long id)
        {
            IQueryable<Book> entities = _repo.GetEntities();

            IQueryable<BookResponse> bookResponse = entities
                .Include(p => p.Publisher)
                .Include(c => c.Category)
                .ThenInclude(c => c.ParentCategory)
                .Select(e => e.MapBookResponse());

            return bookResponse.ToList().SingleOrDefault(b => b.Id == id);
        }

        [HttpPost("books")]
        public async Task<PagedResponse<BookResponse>> GetBooksAsync(QueryOptions options)
        {
            PagedList<BookResponse> books = await _repo.GetBooksAsync(options);

            return books.MapPagedResponse();
        }
    }
}
