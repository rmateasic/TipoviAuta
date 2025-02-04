using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Proizvodjac : Entitet
    {
        public string Naziv { get; set; } = "";

        public string Zemlja { get; set; } = "";


    }
}
