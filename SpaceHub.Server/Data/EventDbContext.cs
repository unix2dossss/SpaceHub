using Microsoft.EntityFrameworkCore;
using SpaceHub.Server.Models;

namespace SpaceHub.Server.Data
{
    public class EventDbContext:DbContext
    {
        public EventDbContext(DbContextOptions options):base(options) 
        {

        }

        public DbSet<Event> Events { get; set; }

    }
}