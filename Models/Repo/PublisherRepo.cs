using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Models.Repo
{
    public class PublisherRepo : BaseRepo<Publisher>, IPublisherRepo
    {
        public PublisherRepo(StoreDbContext ctx) : base(ctx) { }

        public PagedList<Publisher> GetPublishers(QueryOptions options)
        {
            QueryProcessing<Publisher> processing = new QueryProcessing<Publisher>(options);

            IQueryable<Publisher> query = GetEntities();
            IQueryable<Publisher> publishers = processing.ProcessQuery(query);

            return new PagedList<Publisher>(publishers, options);
        }
    }
}
