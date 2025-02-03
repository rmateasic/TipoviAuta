using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class VrstaAutaController : ControllerBase
    {
        private readonly TipoviAutaContext _context;

        public VrstaAutaController(TipoviAutaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.VrsteAuta);

            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });

            }
        }

        [HttpGet]
        [Route("{sifra:int}")]

        public IActionResult GetBySifra(int sifra)
        {
            try
            {
                var s = _context.VrsteAuta.Find(sifra);
                if (s == null)
                {
                    return NotFound();
                }
                return Ok(s);
            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });
            }
        }

        [HttpPost]
        public IActionResult Post(VrstaAuta vrstaauta)
        {
            try
            {
                _context.VrsteAuta.Add(vrstaauta);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, vrstaauta);
            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });
            }

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]

        public IActionResult Put(int sifra, VrstaAuta vrstaauta)
        {
            try
            {

                var s = _context.VrsteAuta.Find(sifra);

                if (s == null)
                {
                    return NotFound();
                }

                s.Naziv = vrstaauta.Naziv;

                _context.VrsteAuta.Update(s);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno promijenjen podatak!" });
            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });
            }

        }
        [HttpDelete]
        [Route("{sifra:int}")]
        public IActionResult Delete(int sifra)
        {
            try
            {
                var s = _context.VrsteAuta.Find(sifra);
                if (s == null)
                {
                    return NotFound();
                }
                _context.VrsteAuta.Remove(s);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno obrisano!" });
            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });


            }
        }
    }

}
