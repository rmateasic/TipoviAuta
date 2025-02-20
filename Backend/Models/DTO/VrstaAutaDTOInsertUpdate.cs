using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTO
{
    public record VrstaAutaDTOInsertUpdate(
        [Required(ErrorMessage ="Naziv je obavezan")]
        string Naziv
        );
    
}
