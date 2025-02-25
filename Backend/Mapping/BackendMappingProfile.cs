using AutoMapper;
using Backend.Models;
using Backend.Models.DTO;

namespace Backend.Mapping
{
    public class BackendMappingProfile : Profile
    {
        public BackendMappingProfile()
        {
            CreateMap<Proizvodjac, ProizvodjacDTORead>();
            CreateMap<ProizvodjacDTOInsertUpdate, Proizvodjac>();

            CreateMap<VrstaAuta,  VrstaAutaDTORead>();
            CreateMap<VrstaAutaDTOInsertUpdate, VrstaAuta>();



            CreateMap<Automobil, AutomobilDTORead>()
                .ForCtorParam(
                    "ProizvodjacNaziv",
                    opt => opt.MapFrom(src => src.Proizvodjac.Naziv))
                    .ForCtorParam(
                    "VrstaAutaNaziv",
                    opt => opt.MapFrom(src => src.VrstaAuta.Naziv)
                    );


            CreateMap<Automobil, AutomobilDTOInsertUpdate>().ForMember(
                    dest => dest.ProizvodjacSifra,
                    opt => opt.MapFrom(src => src.Proizvodjac.Sifra)
                    );

            CreateMap<Automobil, AutomobilDTOInsertUpdate>().ForMember(
                    dest => dest.VrstaAutaSifra,
                    opt => opt.MapFrom(src => src.VrstaAuta.Sifra)
                    );

            CreateMap<AutomobilDTOInsertUpdate, Automobil>();



        }

    }
}
