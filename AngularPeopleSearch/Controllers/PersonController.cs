using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularPeopleSearch.Data;
using Microsoft.AspNetCore.Mvc;
using AngularPeopleSearch.Data.Models;

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
        [Route("GetPeopleByNamePart/{namePart}")]
        public async Task<ActionResult> GetPeopleByNamePart(string namePart)
        {
            try
            {
                var results = await PersonRepository.GetPeopleByNamePart(namePart);
                return Ok(results);
            }
            catch
            {
                return BadRequest();
            }
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
