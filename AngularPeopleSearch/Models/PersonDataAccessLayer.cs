using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularPeopleSearch.Models
{
    public class PersonDataAccessLayer
    {
        AngularPeopleSearchContext Context;

        public PersonDataAccessLayer(AngularPeopleSearchContext context)
        {
            Context = context;
        }

        public IEnumerable<Person> GetAllPersons()
        {
            try
            {
                return Context.Person.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddPerson(Person person)
        {
            try
            {
                Context.Person.Add(person);
                Context.SaveChanges();
                return 1;
            }
            catch {
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

        public Person GetPersonData(int id)
        {
            try
            {
                Person person = Context.Person.Find(id);
                return person;
            }
            catch {
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
    }
}