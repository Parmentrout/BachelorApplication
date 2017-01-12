using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BachelorApplication.Repository
{
    public class BachelorContext: DbContext
    {
        public BachelorContext(DbContextOptions<BachelorContext> options) : base(options)
        {
        }

        public DbSet<Contestant> Contestants { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Pick> Picks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contestant>().ToTable("Contestants");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Pick>().ToTable("Picks")
                .HasOne(p => p.Contestant).WithMany(x => x.Picks);

            modelBuilder.Entity<Pick>().HasOne(p => p.User).WithMany(x => x.Picks);
        }
    }
}
