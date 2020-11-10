using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_System_With_React.Models
{
    public class InventoryContext : DbContext
    {
        public virtual DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connection =
                    "server=localhost;" +
                    "port=3306;" +
                    "user=root;" +
                    "database=mvc_inventory;";

                string version = "10.4.14-MariaDB";

                optionsBuilder.UseMySql(connection, x => x.ServerVersion(version));
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Name)
                .HasCharSet("utf8mb4")
                .HasCollation("utf8mb4_general_ci");

                entity.HasData(
                    new Product()
                    {
                        ID = -1,
                        Name = "IPhone 3G",
                        Quantity = 0,
                        Discontinue = true
                    },
                    new Product()
                    {
                        ID = -2,
                        Name = "IPhone 3",
                        Quantity = 0,
                        Discontinue = true
                    },
                    new Product()
                    {
                        ID = -3,
                        Name = "IPhone 4",
                        Quantity = 0,
                        Discontinue = true
                    },
                    new Product()
                    {
                        ID = -5,
                        Name = "IPhone 4S",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -6,
                        Name = "IPhone 5",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -7,
                        Name = "IPhone 5S",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -8,
                        Name = "IPhone 6",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -9,
                        Name = "IPhone 6S",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -10,
                        Name = "IPhone 7",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -11,
                        Name = "IPhone 7Plus",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -12,
                        Name = "IPhone 8",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -13,
                        Name = "IPhone 8Plus",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -14,
                        Name = "IPhone X",
                        Quantity = 0,
                        Discontinue = false
                    },
                    new Product()
                    {
                        ID = -15,
                        Name = "IPhone 11",
                        Quantity = 0,
                        Discontinue = false
                    });

            });
        }
    }
}
