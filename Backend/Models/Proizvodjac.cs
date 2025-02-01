using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Proizvodjac : Entitet
    {
        public string Naziv { get; set; } = "";
        [Column(TypeName = "nvarchar(100)")]

        public string Zemlja { get; set; } = "";


    }
}
