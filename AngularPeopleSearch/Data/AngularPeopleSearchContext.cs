using Microsoft.EntityFrameworkCore;
using AngularPeopleSearch.Data.Models;

namespace AngularPeopleSearch.Data

{
    public class AngularPeopleSearchContext : DbContext
    {
        public AngularPeopleSearchContext (DbContextOptions<AngularPeopleSearchContext> options):base(options)
        {
        }

        public DbSet<Person> Person { get; set; }
    }
}
