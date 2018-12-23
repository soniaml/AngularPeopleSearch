using System;
using System.ComponentModel.DataAnnotations;

namespace AngularPeopleSearch.Data.Models
{
    public class Person
    {
        public int PersonID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
    }
}
