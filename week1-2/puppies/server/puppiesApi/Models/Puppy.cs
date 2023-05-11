using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace puppiesApi.Models
{
    public class Puppy
    {
        public int id {get; set;}
        public required string breed {get; set;}
        public required string name {get; set;}
        public DateTime birthDate {get; set;}
    }
}
