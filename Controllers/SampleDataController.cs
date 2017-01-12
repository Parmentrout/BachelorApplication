using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BachelorApplication.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BachelorApplication.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly BachelorContext _context;
        public SampleDataController(BachelorContext context)
        {
            _context = context;
        }
        

        [HttpGet("[action]")]
        public async Task<IEnumerable<Contestant>> GetContestants()
        {
            var constestants = await _context.Contestants.ToListAsync();
            var users = await _context.Users.ToListAsync();
            var picks = await _context.Picks.ToListAsync();
            return constestants;
        }

        [HttpPost("PostChanges")]
        public async Task<JsonResult> PostChanges([FromBody] List<Contestant> contestants)
        {
            foreach (var contestant in contestants)
            {
                var lookup = await _context.Contestants.FirstOrDefaultAsync(x => x.ContestantId == contestant.ContestantId);
                if (lookup.IsActive != contestant.IsActive)
                {
                    lookup.IsActive = contestant.IsActive;
                }
            }

            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return Json($"Error! {ex}");
            }

            return Json("Saved Successfully!");
        }
    }
}
