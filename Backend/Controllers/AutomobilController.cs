using AutoMapper;
using Backend.Data;
using Backend.Models;
using Backend.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AutomobilController(TipoviAutaContext context, IMapper mapper) : BackendController(context, mapper)
    {
        [HttpGet]
        public ActionResult<List<AutomobilDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                return Ok(_mapper.Map<List<AutomobilDTORead>>(_context.Automobili.Include(g => g.Proizvodjac).Include(g=>g.VrstaAuta)));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }

        }


        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<AutomobilDTOInsertUpdate> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Automobil? e;
            try
            {
                e = _context.Automobili.Include(g => g.Proizvodjac).Include(g => g.VrstaAuta).FirstOrDefault(g => g.Sifra == sifra);
   
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Automobil ne postoji u bazi" });
            }

            return Ok(_mapper.Map<AutomobilDTOInsertUpdate>(e));
        }

        [HttpPost]
        public IActionResult Post(AutomobilDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }

         
            Proizvodjac? es;
            try
            {
                es = _context.Proizvodjaci.Find(dto.ProizvodjacSifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (es == null)
            {
                return NotFound(new { poruka = "Proizvodjaci ne postoje u bazi" });
            }

            VrstaAuta? esa;
            try
            {
                esa = _context.VrsteAuta.Find(dto.VrstaAutaSifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (esa == null)
            {
                return NotFound(new { poruka = "Vrste auta ne postoje u bazi" });
            }

            try
            {
                var e = _mapper.Map<Automobil>(dto);
                e.Proizvodjac = es;
                e.VrstaAuta = esa;
                _context.Automobili.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<AutomobilDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }



        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, AutomobilDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Automobil? e;
                try
                {
                    e = _context.Automobili.Include(g => g.Proizvodjac).Include(g => g.VrstaAuta).FirstOrDefault(x => x.Sifra == sifra);
                
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Automobil ne postoji u bazi" });
                }

                Proizvodjac? es;
                try
                {
                    es = _context.Proizvodjaci.Find(dto.ProizvodjacSifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (es == null)
                {
                    return NotFound(new { poruka = "Proizvodjac ne postoji u bazi" });
                }

                VrstaAuta? esa;
                try
                {
                    esa = _context.VrsteAuta.Find(dto.VrstaAutaSifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (esa == null)
                {
                    return NotFound(new { poruka = "Vrsta auta ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);
                e.Proizvodjac = es;
                e.VrstaAuta = esa;
                _context.Proizvodjaci.Update(es);
                _context.SaveChanges();

                return Ok(new { poruka = "Uspješno promjenjeno" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }

        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Automobil? e;
                try
                {
                    e = _context.Automobili.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound("Automobil ne postoji u bazi");
                }
                _context.Automobili.Remove(e);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno obrisano" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


    }
}