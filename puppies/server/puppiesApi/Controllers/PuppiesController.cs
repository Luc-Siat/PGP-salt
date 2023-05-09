using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using puppiesApi.Models;

namespace puppiesApi.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class PuppiesController : Controller
    {
      private readonly PuppiesContext _context;

      public PuppiesController(PuppiesContext context)
      {
          _context = context;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<Puppy>>> GetAll()
      {
        return await _context.Puppies.ToListAsync();
      }

      [HttpGet("id")]
      public async Task<ActionResult<Puppy>> GetOne(int id)
      {
        if (_context.Puppies == null)
        {
          return NotFound();
        }
        var puppy = await _context.Puppies.FindAsync(id);

        if (puppy == null)
        {
          return BadRequest();
        }

        return Ok(puppy);
      }

      [HttpPost]
      public async Task<ActionResult> PostOne(PuppyRequest puppy)
      {
        if ( puppy is null)
        {
          return BadRequest();
        }

        Puppy puppyToAdd = new Puppy(){
          name= puppy.name,
          breed= puppy.breed,
          birthDate= puppy.birthDate
        };

        var addedPuppy = _context.Puppies.Add(puppyToAdd).Entity;

        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAll), new {id = addedPuppy.id}, puppy);
      }

      [HttpPut("id")]
      public async Task<ActionResult> PutOne(int id, Puppy puppy)
      {
        var puppyToUpdate = await _context.Puppies.FindAsync(id);

        if (puppyToUpdate == null)
        {
          return NotFound();
        }
        puppyToUpdate.name = puppy.name;
        puppyToUpdate.breed = puppy.breed;
        puppyToUpdate.birthDate = puppy.birthDate;

        await _context.SaveChangesAsync();

        return Ok();
      }

      [HttpDelete("id")]
      public async Task<ActionResult> DeleteOne(int id)
      {
        var puppyToDelete = await _context.Puppies.FindAsync(id);
        if ( puppyToDelete == null)
        {
          return NotFound();
        }
        return NoContent();
      }
    }
}
