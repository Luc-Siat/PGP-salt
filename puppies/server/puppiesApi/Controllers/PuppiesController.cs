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

      // [HttpPost]
      // public Task<ActionResult> PostOne(Puppy puppy)
      // {
      //   return Ok();
      // }

      // [HttpPut("id")]
      // public Task<ActionResult> PutOne(Puppy puppy)
      // {
      //   return Ok();
      // }

      // [HttpDelete("id")]
      // public Task<ActionResult> DeleteOne()
      // {
      //   return Ok();
      // }
    }
}
