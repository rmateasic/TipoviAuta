namespace Backend.Models.DTO
{
    public record AutomobilDTORead(
        int Sifra,
        string Naziv,
        string Model,
        string Gorivo,
        int Godiste,
        string ProizvodjacNaziv,
        string VrstaAutaNaziv
        );
    
}
