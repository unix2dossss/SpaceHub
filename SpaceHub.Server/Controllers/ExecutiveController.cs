using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpaceHub.Server.Data;
using SpaceHub.Server.Models;

namespace SpaceHub.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExecutiveController : ControllerBase
    {
        private readonly ExecutiveDbContext _context;

        public ExecutiveController(ExecutiveDbContext context)
        {
            _context = context;
        }

        // GET: api/Executive
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Executive>>> GetExecutives()
        {
            return await _context.Executives.ToListAsync();
        }

        // GET: api/Executive/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Executive>> GetExecutive(int id)
        {
            var executive = await _context.Executives.FindAsync(id);

            if (executive == null)
            {
                return NotFound();
            }

            return executive;
        }

        // PUT: api/Executive/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExecutive(int id, Executive executive)
        {
            if (id != executive.ExecId)
            {
                return BadRequest();
            }

            _context.Entry(executive).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExecutiveExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Executive
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Executive>> PostExecutive(Executive executive)
        {
            _context.Executives.Add(executive);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExecutive", new { id = executive.ExecId }, executive);
        }

        // DELETE: api/Executive/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExecutive(int id)
        {
            var executive = await _context.Executives.FindAsync(id);
            if (executive == null)
            {
                return NotFound();
            }

            _context.Executives.Remove(executive);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExecutiveExists(int id)
        {
            return _context.Executives.Any(e => e.ExecId == id);
        }
    }
}
