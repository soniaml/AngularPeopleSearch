using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularPeopleSearch.Data;
using Microsoft.AspNetCore.Mvc;
using AngularPeopleSearch.Data.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularPeopleSearch.Controllers
{
    [Route("api/person")]
    public class PersonController : Controller
    {
        IPersonRepository PersonRepository;

        public PersonController(IPersonRepository personRepository)
        {
            PersonRepository = personRepository;
        }

        [HttpGet]
        [Route("GetPeopleByNamePart")]
        public IEnumerable<Person> Index()
        {
            var results = PersonRepository.GetPeopleByNamePart("i");
            return results;
        }

        //[HttpPost]
        //[Route("api/Person/Create")]
        //public int Create([FromBody] Person person)
        //{
        //    return personDataAccessLayer.AddPerson(person);
        //}

        //[HttpGet]
        //[Route("api/Person/Details/{id}")]
        //public Person Details(int id)
        //{
        //    return personDataAccessLayer.GetPersonData(id);
        //}

        //[HttpGet]
        //[Route("api/Person/Edit")]
        //public int Edit([FromBody]Person person)
        //{
        //    return personDataAccessLayer.UpdatePerson(person);
        //}        
    }
}
