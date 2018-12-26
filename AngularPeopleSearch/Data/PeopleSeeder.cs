using System.Linq;
using AngularPeopleSearch.Data.Models;

namespace AngularPeopleSearch.Data
{
    public class PeopleSeeder
    {
        private readonly AngularPeopleSearchContext Context;

        public PeopleSeeder(AngularPeopleSearchContext context)
        {
            Context = context;
        }

        public void Seed()
        {
            Context.Database.EnsureCreated();

            if (!Context.Person.Any())
            {
                //Create sample data
                Context.Person.Add(
                    new Person()
                    {
                        FirstName = "Fred",
                        LastName = "Flintstone",
                        Address = "100 Bedrock Lane",
                        Interests = "Buffalo Lodge, Bowling",
                        Age = 25,
                        ImageUrl = "./images/Fred_Flintstone.jpg"
                    });
                Context.Person.Add(
                    new Person()
                    {
                        FirstName = "Wilma",
                        LastName = "Flintstone",
                        Address = "100 Bedrock Lane",
                        Interests = "Data Science",
                        Age = 24,
                        ImageUrl = "./images/Wilma_Flintstone.jpg"
                    });
                Context.Person.Add(
                    new Person()
                    {
                        FirstName = "Deputy",
                        LastName = "Dog",
                        Address = "50 Outwest Ave.",
                        Interests = "Law Enforcement",
                        Age = 30,
                        ImageUrl = "./images/Deputy_Dog.jpg"
                    });
            }
            Context.SaveChanges();
        }
    }
}
