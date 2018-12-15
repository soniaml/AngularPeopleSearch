using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularPeopleSearch.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularPeopleSearch.Controllers
{
    //[Route("api/[controller]")]
    public class PersonController : Controller
    {
        PersonDataAccessLayer personDataAccessLayer = new PersonDataAccessLayer();

        [HttpGet]
        [Route("api/Person/Index")]
        public IEnumerable<Person> Index()
        {
            return personDataAccessLayer.GetAllPersons();
        }

        [HttpPost]
        [Route("api/Person/Create")]
        public int Create([FromBody] Person person)
        {
            return personDataAccessLayer.AddPerson(person);
        }

        [HttpGet]
        [Route("api/Person/Details/{id}")]
        public Person Details(int id)
        {
            return personDataAccessLayer.GetPersonData(id);
        }

        [HttpGet]
        [Route("api/Person/Edit")]
        public int Edit([FromBody]Person person)
        {
            return personDataAccessLayer.UpdatePerson(person);
        }        
    }
}
