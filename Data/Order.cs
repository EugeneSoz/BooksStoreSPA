using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BooksStoreSPA.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BooksStoreSPA.Data
{
    public class Order
    {
        [BindNever]
        public long OrderId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public Payment Payment { get; set; }
        [BindNever]
        public bool Shipped { get; set; } = false;
        public List<OrderLine> Goods { get; set; }
    }
}
