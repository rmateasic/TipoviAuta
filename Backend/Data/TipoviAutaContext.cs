using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class TipoviAutaContext : DbContext
    {
        public TipoviAutaContext(DbContextOptions<TipoviAutaContext> options) : base(options)
        {

        }

        public DbSet<Models.Proizvodjac> Proizvodjaci { get; set; }

    }
}
