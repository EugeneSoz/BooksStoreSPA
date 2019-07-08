using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BooksStoreSPA.Models
{
    public class OrderLine
    {
        [BindNever]
        public long OrderLineId { get; set; }
        [Required]
        public long ProductId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
