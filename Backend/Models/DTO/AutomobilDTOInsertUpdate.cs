using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTO
{
    public record AutomobilDTOInsertUpdate(
        [Required(ErrorMessage = "Naziv je obavezna")]
        string? Naziv,
        [Required(ErrorMessage = "Model je obavezan")]
        string? Model,
        [Required(ErrorMessage = "Gorivo je obavezno")]
        string? Gorivo,
        [Required(ErrorMessage = "Godiste je obavezno")]
        int? Godiste,
        [Required(ErrorMessage = "Proizvodjac je obavezan")]
        int? ProizvodjacSifra,
        [Required(ErrorMessage = "Vrsta auta je obavezna")]
        int? VrstaAutaSifra
        );
   
}
