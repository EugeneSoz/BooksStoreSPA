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
    public class PublisherController : BaseController
    {
        private readonly IPublisherRepo _repo;

        public PublisherController(IPublisherRepo repo) => _repo = repo;

        [HttpGet("publisher/{id}")]
        public async Task<Data.Publisher> GetPublisherAsync(long id)
        {
            return await _repo.GetPublisherAsync(id);
        }

        [HttpPost("publishers")]
        public async Task<PagedResponse<Publisher>> GetPublishersAsync([FromBody] QueryOptions options)
        {
            //if (HttpContext.User.IsInRole("Administrator"))
            //{
            //    PagedList<Publisher> publishers = await _repo.GetPublishersAsync(options);

            //    return publishers?.MapPagedResponse();
            //}

            //return null;
            PagedList<Data.Publisher> publishers = await _repo.GetPublishersAsync(options);

            return publishers?.MapPagedResponse();
        }

        [HttpPost("create")]
        public async Task<ActionResult> CreatePublisherAsync([FromBody] PublisherDTO publisherDTO)
        {
            Publisher publisher = publisherDTO.MapPublisher();
            return await CreateAsync(publisher, _repo.AddAsync);
        }

        [HttpPut("update")]
        public async Task<ActionResult> UpdatePublisherAsync([FromBody] Publisher publisherDTO)
        {
            Publisher publisher = publisherDTO.MapPublisher();
            return await UpdateAsync(publisher, _repo.UpdateAsync);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> DeletePublisherAsync([FromBody] Publisher publisherDTO)
        {
            Publisher publisher = publisherDTO.MapPublisher();
            return await DeleteAsync(publisher, _repo.DeleteAsync);
        }
    }
}
