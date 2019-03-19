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

namespace BooksStoreSPA.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class PublisherController : ControllerBase
    {
        private readonly IBaseRepo<Publisher> _repo;

        public PublisherController(IBaseRepo<Publisher> repo) => _repo = repo;

        [HttpGet("publisher/{id}")]
        public async Task<Publisher> GetPublisherAsync(long id)
        {
            Publisher publisher = await _repo.GetOneAsync(id, nameof(Publisher.Books));

            publisher.Books.ForEach(b => b.Publisher = null);

            return publisher;
        }

        [HttpPost("publishers")]
        public async Task<PagedResponse<Publisher>> GetPublishersAsync(QueryOptions options)
        {
            IQueryable<Publisher> entities = await _repo.GetAllAsync();

            PagedList<Publisher> publishers = new PagedList<Publisher>(entities, options);

            return publishers.MapPagedResponse();
        }
    }
}
