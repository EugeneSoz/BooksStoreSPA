﻿using System;
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
        public async Task<PagedResponse<BookResponse>> GetBooksAsync([FromBody] QueryOptions options)
        {
            PagedList<BookResponse> books = await _repo.GetBooksAsync(options);

            return books.MapPagedResponse();
        }

        [HttpPost("create")]
        public async Task<ActionResult> CreateBookAsync([FromBody] Book book)
        {
            return await CreateAsync(book, _repo.AddAsync);
        }

        [HttpPut("update")]
        public async Task<ActionResult> UpdateBookAsync([FromBody] Book book)
        {
            return await UpdateAsync(book, _repo.UpdateAsync);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> DeleteTaskAsync(Book book)
        {
            return await DeleteAsync(book, _repo.DeleteAsync);
        }
    }
}