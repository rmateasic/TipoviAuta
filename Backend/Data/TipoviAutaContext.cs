using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class TipoviAutaContext : DbContext
    {
        public TipoviAutaContext(DbContextOptions<TipoviAutaContext> options) : base(options)
        {

        }

        public DbSet<Proizvodjac> Proizvodjaci { get; set; }
        public DbSet<VrstaAuta> VrsteAuta { get; set; }

        public DbSet<Automobil> Automobili { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Automobil>().HasOne(g => g.Proizvodjac);

            modelBuilder.Entity<Automobil>().HasOne(g => g.VrsteAuta);
        }

    }
}
