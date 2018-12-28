using System.Threading.Tasks;
using AngularPeopleSearch.Data;
using Microsoft.AspNetCore.Mvc;

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
                //For simulation purposes only
                System.Threading.Thread.Sleep(2000);

                var results = await PersonRepository.GetPeopleByNamePart(namePart);
                return Ok(results);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
