using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularPeopleSearch.Data;
using AngularPeopleSearch.Data.Models;

namespace AngularPeopleSearch.Data
{
    public class PersonRepository : IPersonRepository
    {
        AngularPeopleSearchContext Context;

        public PersonRepository(AngularPeopleSearchContext context)
        {
            Context = context;
        }

        public int AddPerson(Person person)
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

        public int DeletePerson(int id)
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

        public IEnumerable<Person> GetAllPeople()
        {
            try
            {
                var result = Context.Person
                            .OrderBy(p => p.LastName)
                            .ToList();

                return result;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<Person> GetPeopleByNamePart(string namePart)
        {
            try
            {
                return Context.Person
                    .Where(p => p.FirstName == namePart)
                    .OrderBy(p => p.LastName)
                    .ToList();
            }
            catch
            {
                throw;
            }
        }

        public Person GetPersonData(int id)
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

        public int UpdatePerson(Person person)
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