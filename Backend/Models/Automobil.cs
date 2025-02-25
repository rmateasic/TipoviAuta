using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Automobil: Entitet
    {
        [Column("nazivauta")]
        public string Naziv { get; set; } = "";

        public string Gorivo { get; set; } = "";

        public string Model { get; set; } = "";

        public int Godiste { get; set; } = 0;

        [ForeignKey("proizvodjaci")]
        public required Proizvodjac Proizvodjac { get; set; }

        [ForeignKey("vrsteauta")]
        public required VrstaAuta VrstaAuta { get; set; }
    }
}
