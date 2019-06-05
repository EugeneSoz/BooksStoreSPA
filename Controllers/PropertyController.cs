using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BooksStoreSPA.Controllers
{
    [Route("api/properties")]
    [Produces("application/json")]
    public class PropertyController : ControllerBase
    {
        [HttpGet("pub_filter")]
        public List<FilterSortingProps> GetPublisherFilterProps()
        {
            FilterProperties filterProperties = new FilterProperties();

            return filterProperties.GetPublisherFilterProps();
        }

        [HttpGet("pub_sorting")]
        public List<FilterSortingProps> GetPublisherSortingProps()
        {
            SortingProperties sortingProperties = new SortingProperties();

            return sortingProperties.GetPublisherSortingProps();
        }
    }
}
