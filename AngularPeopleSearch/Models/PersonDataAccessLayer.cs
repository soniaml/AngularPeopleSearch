using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularPeopleSearch.Models
{
    public class PersonDataAccessLayer
    {
        AngularPeopleSearchContext db = new AngularPeopleSearchContext(new DbContextOptions<AngularPeopleSearchContext>());

        public IEnumerable<Person> GetAllPersons()
        {
            try
            {
                return db.Person.ToList();
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
                db.Person.Add(person);
                db.SaveChanges();
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
                db.Entry(person).State = EntityState.Modified;
                db.SaveChanges();

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
                Person person = db.Person.Find(id);
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
                Person person = db.Person.Find(id);
                db.Person.Remove(person);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}