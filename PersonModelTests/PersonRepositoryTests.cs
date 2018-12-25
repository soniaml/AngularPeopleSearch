using System.Collections.Generic;
using AngularPeopleSearch.Data;
using AngularPeopleSearch.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PersonModelTests
{
    [TestClass]
    public class PersonRepositoryTests
    {
        private List<Person> People;

        public PersonRepositoryTests()
        {
            People = new List<Person>
            {
                new Person
                {
                    FirstName = "Doris",
                    LastName = "Day",
                    Address = "1234 Hollywood Hills",
                    Age = 72,
                    Interests = "singing, dancing"
                },

                new Person
                {
                    FirstName = "Skrillex",
                    LastName = "Moore",
                    Address = "Dubstep Lane",
                    Age = 30,
                    Interests = "Dubstep, funky glasses"
                },

                new Person
                {
                    FirstName = "Brad",
                    LastName = "Griffiths",
                    Address = "England",
                    Age = 20,
                    Interests = "Being vicious, rock"
                },

                new Person
                {
                    FirstName = "Andy",
                    LastName = "Griffith",
                    Address = "Mayberry",
                    Age = 30,
                    Interests = "guitar"
                }
            };
        }

        [TestMethod]
        public void CanAddPerson()
        {
            var options = new DbContextOptionsBuilder<AngularPeopleSearchContext>()
            .UseInMemoryDatabase(databaseName: "CanInsertPerson")
            .Options;

            var expectedFirstName = People[0].FirstName;

            using (var context = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context);
                personRepository.Add(People[0]);
            }

            using (var context2 = new AngularPeopleSearchContext(options))
            {
                var result = context2.Person;
                Assert.AreEqual(expectedFirstName, context2.Person.FirstAsync().Result.FirstName);
            }
        }

        [TestMethod]
        public void CanDeletePerson()
        {

            var options = new DbContextOptionsBuilder<AngularPeopleSearchContext>()
            .UseInMemoryDatabase(databaseName: "CanDeletePerson")
            .Options;

            using (var context = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context);
                personRepository.Add(People[0]);
            }

            using (var context2 = new AngularPeopleSearchContext(options))
            {
                var deleteID = context2.Person.FirstAsync().Result.PersonID;
                Assert.IsNotNull(context2.Person.Find(deleteID));

                var personRepository = new PersonRepository(context2);
                personRepository.Delete(deleteID);
                Assert.IsNull(context2.Person.Find(deleteID));
            }
        }

        [TestMethod]
        public void CanGetAllPeople()
        {
            var options = new DbContextOptionsBuilder<AngularPeopleSearchContext>()
            .UseInMemoryDatabase(databaseName: "CanGetAllPeople")
            .Options;

            using (var context = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context);

                foreach(Person p in People)
                {
                    personRepository.Add(p);
                }
            }

            using (var context2 = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context2);
                var people = personRepository.GetAllPeople();

                Assert.AreEqual(People.Count, people.Result.Count);
            }
        }

        //[TestMethod]
        //public void CanGetById()
        //{
        //    var options = new DbContextOptionsBuilder<AngularPeopleSearchContext>()
        //    .UseInMemoryDatabase(databaseName: "CanGetPeopleById")
        //    .Options;

        //    var iD = 2;

        //    using (var context = new AngularPeopleSearchContext(options))
        //    {
        //        var personRepository = new PersonRepository(context);

        //        foreach (Person p in People)
        //        {
        //            personRepository.Add(p);
        //        }
        //    }

        //    using (var context2 = new AngularPeopleSearchContext(options))
        //    {
        //        var personRepository = new PersonRepository(context2);

        //        var person = personRepository.GetById(iD);
        //        Assert.IsNotNull(person);
        //        Assert.AreEqual(iD, person.PersonID);
        //    }
        //}

        [TestMethod]
        public void CanGetPeopleByName()
        {
            var options = new DbContextOptionsBuilder<AngularPeopleSearchContext>()
            .UseInMemoryDatabase(databaseName: "CanGetPeopleByName")
            .Options;

            var namePart = "ith";

            using (var context = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context);

                foreach (Person p in People)
                {
                    personRepository.Add(p);
                }
            }

            using (var context2 = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context2);
                var people = personRepository.GetPeopleByNamePart(namePart);

                foreach (Person p in people.Result)
                {
                    Assert.IsTrue(p.FirstName.Contains(namePart) || p.LastName.Contains(namePart));
                }
            }
        }

        [TestMethod]
        public void CanUpdatePerson()
        {
            var options = new DbContextOptionsBuilder<AngularPeopleSearchContext>()
            .UseInMemoryDatabase(databaseName: "CanUpdatePerson")
            .Options;

            int expectedAge = 82;

            using (var context = new AngularPeopleSearchContext(options))
            {
                var personRepository = new PersonRepository(context);
                personRepository.Add(People[0]);
            }

            using (var context2 = new AngularPeopleSearchContext(options))
            {
                var updatedPerson = context2.Person.FirstAsync().Result;
                updatedPerson.Age = expectedAge;

                var personRepository = new PersonRepository(context2);
                personRepository.Update(updatedPerson);
            }

            using (var context3 = new AngularPeopleSearchContext(options))
            {
                var result = context3.Person;
                Assert.AreEqual(expectedAge, context3.Person.FirstAsync().Result.Age);
            }
        }
    }
}
