﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using BooksStoreSPA.Data.DTO;

namespace BooksStoreSPA.Models.Repo
{
    public interface IPublisherRepo : IBaseRepo<Publisher>
    {
        Task<Publisher> GetPublisherAsync(long id);
        Task<PagedList<Publisher>> GetPublishersAsync(QueryOptions options);
    }
}
