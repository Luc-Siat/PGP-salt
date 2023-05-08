using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using puppiesApi.Models;

    public class PuppiesContext : DbContext
    {
        public PuppiesContext (DbContextOptions<PuppiesContext> options)
            : base(options)
        {
        }

        public DbSet<puppiesApi.Models.Puppy> Puppies { get; set; } = default!;
    }
