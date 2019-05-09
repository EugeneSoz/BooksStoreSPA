using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Controllers
{
    [Route("api/orders")]
    //[Authorize(Roles = "Administrator")]
    public class OrderController : ControllerBase
    {
        private StoreDbContext _context;

        public OrderController(StoreDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            return _context.Orders
                .Include(o => o.Goods).Include(o => o.Payment);
        }

        [HttpPost("{id}")]
        public void MarkShipped(long id)
        {
            Order order = _context.Orders.Find(id);
            if (order != null)
            {
                order.Shipped = true;
                _context.SaveChanges();
            }
        }

        [HttpPost]
        //[AllowAnonymous]
        public IActionResult CreateOrder([FromBody] Order order)
        {
            if (ModelState.IsValid)
            {
                order.OrderId = 0;
                order.Shipped = false;
                order.Payment.Total = GetPrice(order.Goods);
                ProcessPayment(order.Payment);
                if (order.Payment.AuthCode != null)
                {
                    _context.Add(order);
                    _context.SaveChanges();

                    return Ok(new
                    {
                        orderId = order.OrderId,
                        authCode = order.Payment.AuthCode,
                        amount = order.Payment.Total
                    });
                }
                else
                {
                    return BadRequest("Payment rejected");
                }
            }
            return BadRequest(ModelState);
        }

        private decimal GetPrice(IEnumerable<CartLine> lines)
        {
            IEnumerable<long> ids = lines.Select(l => l.ProductId);
            return _context.Books
                .Where(b => ids.Contains(b.Id))
                .Select(b => lines.First(l => l.ProductId == b.Id).Quantity * b.Price)
            .Sum();
        }

        private void ProcessPayment(Payment payment)
        {
            // integrate your payment system here
            payment.AuthCode = "12345";
        }
    }
}
