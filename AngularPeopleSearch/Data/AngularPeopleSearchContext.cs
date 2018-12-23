using Microsoft.EntityFrameworkCore;

namespace AngularPeopleSearch.Models
{
    public class AngularPeopleSearchContext : DbContext
    {
        public AngularPeopleSearchContext (DbContextOptions<AngularPeopleSearchContext> options):base(options)
        {
        }

        public DbSet<Person> Person { get; set; }
    }
}
