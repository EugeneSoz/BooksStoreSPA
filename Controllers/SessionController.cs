using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data.DTO;
using BooksStoreSPA.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace BooksStoreSPA.Controllers
{
    [Route("api/session")]
    public class SessionController : ControllerBase
    {
        [HttpGet("cart")]
        public ActionResult GetCart()
        {
            string result = HttpContext.Session.GetString("cart");

            return Ok(result);
        }

        [HttpPost("cart")]
        public ActionResult StoreCart([FromBody] ProductSelection[] products)
        {
            string jsonData = JsonConvert.SerializeObject(products, 
                new JsonSerializerSettings {
                    ContractResolver = new CamelCasePropertyNamesContractResolver() });
            HttpContext.Session.SetString("cart", jsonData);
            return Ok(new ValidationErrors { Errors = null });
        }
    }
}
