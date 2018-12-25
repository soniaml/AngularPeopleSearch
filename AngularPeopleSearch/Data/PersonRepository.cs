using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularPeopleSearch.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularPeopleSearch.Data
{
    public class PersonRepository : IPersonRepository
    {
        AngularPeopleSearchContext Context;

        public PersonRepository(AngularPeopleSearchContext context)
        {
            Context = context;
        }

        public int Add(Person person)
        {
            try
            {
                Context.Person.Add(person);
                Context.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int Delete(int id)
        {
            try
            {
                Person person = Context.Person.Find(id);
                Context.Person.Remove(person);
                Context.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public async Task<List<Person>> GetAllPeople()
        {
            try
            {
                return await Context.Person
                            .OrderBy(p => p.LastName)
                            .ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<List<Person>> GetPeopleByNamePart(string namePart)
        {
            return await Context.Person
                    .Where(p => p.FirstName.Contains(namePart) || p.LastName.Contains(namePart))
                    .OrderBy(p => p.LastName)
                    .ToListAsync();
        }

        public Person GetById(int id)
        {
            try
            {
                Person person = Context.Person.Find(id);
                return person;
            }
            catch
            {
                throw;
            }
        }

        public int Update(Person person)
        {
            try
            {
                Context.Entry(person).State = EntityState.Modified;
                Context.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}