using System.Collections.Generic;
using AngularPeopleSearch.Data.Models;

namespace AngularPeopleSearch.Data
{
    public interface IPersonRepository
    {
        int AddPerson(Person person);
        int DeletePerson(int id);
        IEnumerable<Person> GetAllPeople();
        IEnumerable<Person> GetPeopleByNamePart(string namePart);
        Person GetPersonData(int id);
        int UpdatePerson(Person person);
    }
}