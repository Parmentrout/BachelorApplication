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
            return constestants;
        }

        [HttpPost("PostChanges")]
        public async Task<JsonResult> PostChanges([FromBody] List<Contestant> contestants)
        {
            foreach (var contestant in contestants)
            {
                if (contestant.HasChanged)
                {
                    var lookup =
                        await _context.Contestants.FirstOrDefaultAsync(x => x.ContestantId == contestant.ContestantId);
                    if (lookup.IsActive != contestant.IsActive)
                    {
                        lookup.IsActive = contestant.IsActive;
                    }
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

        [HttpGet("[action]")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            var contestants = await _context.Contestants.ToListAsync();
            var users = await _context.Users.Where(u => u.Username != "Unassigned").ToListAsync();

            return users;
        }

        [HttpPost("SaveFantasy")]
        public JsonResult SaveFantasy([FromBody] Contestant contestant)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == contestant.UserName);
            var cont = _context.Contestants.FirstOrDefault(c => c.Name == contestant.Name);

            if (cont == null) { return Json("Error"); }

            if (user == null)
            {
                var add = _context.Users.Add(new User() { Username = contestant.UserName });
                user = add.Entity;
            }

            cont.User = user;
            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return Json($"Error! {ex}");
            }



            return Json($"Saved for {contestant.UserName}");
        }
    }
}

class FantasyViewModel
{
    public string UserName { get; set; }
    public List<Contestant> Contestants { get; set; }
}