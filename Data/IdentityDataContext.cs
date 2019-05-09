﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BooksStoreSPA.Data
{
    public class IdentityDataContext : IdentityDbContext<IdentityUser>
    {
        public IdentityDataContext(DbContextOptions<IdentityDataContext> options)
        : base(options) { }
    }
}
