using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Infrastructure;
using BooksStoreSPA.Models;
using BooksStoreSPA.Models.Repo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Controllers
{
    public class BookController : BaseController
    {
        private readonly IBookRepo _repo;

        public BookController(IBookRepo repo) => _repo = repo;

        [HttpGet("book/{id}")]
        public async Task<Book> GetBookAsync(long id)
        {
            return await _repo.GetBookAsync(id);
        }

        [HttpPost("books")]
        [AllowAnonymous]
        public async Task<PagedResponse<BookResponse>> GetBooksAsync([FromBody] QueryOptions options)
        {
            PagedList<BookResponse> books = await _repo.GetBooksAsync(options);

            return books.MapPagedResponse();
        }

        [HttpPost("create")]
        public async Task<ActionResult> CreateBookAsync([FromBody] BookDTO bookDTO)
        {
            Book book = bookDTO.MapBook();
            return await CreateAsync(book, _repo.AddAsync);
        }

        [HttpPut("update")]
        public async Task<ActionResult> UpdateBookAsync([FromBody] BookDTO bookDTO)
        {
            Book book = bookDTO.MapBook();
            return await UpdateAsync(book, _repo.UpdateAsync);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> DeleteTaskAsync(BookDTO bookDTO)
        {
            Book book = bookDTO.MapBook();
            return await DeleteAsync(book, _repo.DeleteAsync);
        }
    }
}
