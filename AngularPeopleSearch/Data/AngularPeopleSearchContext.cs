using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularPeopleSearch.Models
{
    public class AngularPeopleSearchContext : DbContext
    {
        public AngularPeopleSearchContext (DbContextOptions<AngularPeopleSearchContext> options)
            : base(options)
        {
        }

        public DbSet<AngularPeopleSearch.Models.Person> Person { get; set; }
    }
}
