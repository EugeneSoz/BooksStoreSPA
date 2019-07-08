using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BooksStoreSPA.Models
{
    public class Payment
    {
        [BindNever]
        public long PaymentId { get; set; }
        [Required]
        public string CardNumber { get; set; }
        [Required]
        public string CardExpiry { get; set; }
        [Required]
        public int CardSecurityCode { get; set; }
        [BindNever]
        public decimal Total { get; set; }
        [BindNever]
        public string AuthCode { get; set; }
    }
}
