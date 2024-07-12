using Microsoft.EntityFrameworkCore;
using SpaceHub.Server.Models;

namespace SpaceHub.Server.Data
{
    public class ExecutiveDbContext:DbContext
    {
        public ExecutiveDbContext(DbContextOptions<ExecutiveDbContext> options):base(options) 
        {

        }

        public DbSet<Executive> Executives {  get; set; }

    }
}
