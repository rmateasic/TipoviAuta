using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Automobil: Entitet
    {
        public string Naziv { get; set; } = "";

        public string Gorivo { get; set; } = "";

        public string Model { get; set; } = "";

        public int Godiste { get; set; } = 0;

        [ForeignKey("proizvodjac")]
        public required Proizvodjac Proizvodjac { get; set; }

        [ForeignKey("vrstaauta")]
        public required VrstaAuta VrstaAuta { get; set; }
    }
}
