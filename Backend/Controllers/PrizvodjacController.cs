using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ProizvodjacController : ControllerBase
    {
        private readonly TipoviAutaContext _context;

        public ProizvodjacController(TipoviAutaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Proizvodjaci);

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
                var s = _context.Proizvodjaci.Find(sifra);
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
        public IActionResult Post(Proizvodjac proizvodjac)
        {
            try
            {
                _context.Proizvodjaci.Add(proizvodjac);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, proizvodjac);
            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });
            }

        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]

        public IActionResult Put(int sifra, Proizvodjac proizvodjac)
        {
            try
            {

                var s = _context.Proizvodjaci.Find(sifra);

                if (s == null)
                {
                    return NotFound();
                }

                s.Naziv = proizvodjac.Naziv;
                s.Zemlja = proizvodjac.Zemlja;

                _context.Proizvodjaci.Update(s);
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
                var s = _context.Proizvodjaci.Find(sifra);
                if (s == null)
                {
                    return NotFound();
                }
                _context.Proizvodjaci.Remove(s);
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
