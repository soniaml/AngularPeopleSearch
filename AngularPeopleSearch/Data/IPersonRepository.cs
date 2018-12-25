using System.Collections.Generic;
using System.Threading.Tasks;
using AngularPeopleSearch.Data.Models;

namespace AngularPeopleSearch.Data
{
    public interface IPersonRepository
    {
        int Add(Person person);
        int Delete(int id);
        Task<List<Person>> GetAllPeople();
        Task<List<Person>> GetPeopleByNamePart(string namePart);

        Person GetById(int id);
        int Update(Person person);
    }
}