using Microsoft.EntityFrameworkCore;
using SpaceHub.Server.Models;

namespace SpaceHub.Server.Data
{
    public class MemberDbContext:DbContext
    {
        public MemberDbContext(DbContextOptions<MemberDbContext> options):base(options) 
        {

        }

        public DbSet<Member> Members {  get; set; }

    }
}
