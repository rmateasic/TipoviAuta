using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTO
{
    public record ProizvodjacDTOInsertUpdate(
        [Required(ErrorMessage = "Naziv je obavezan")]
        string Naziv,
        [Required(ErrorMessage = "Zemlja je obavezna")]
        string Zemlja
        );
   
}
