using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Text.RegularExpressions;
using Timelogger.Entities;

namespace Timelogger.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly Regex validationRegex = new Regex(@"^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$", RegexOptions.IgnoreCase);
        private readonly ApiContext _context;

        public ProjectsController(ApiContext context)
        {
            _context = context;
        }

        // GET api/projects
        [HttpGet]
        public IActionResult Get()
        {
            var project = _context.Projects.OrderBy(p => p.Id);
            return Ok(project);
        }

        // GET api/projects/
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var project = _context.Projects.FirstOrDefault(p => p.Id == id);

            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

        // POST api/projects
        [HttpPost]
        [ActionName("Complex")]
        public IActionResult Post(string name, string comment = "")
        {
            if (name != null && validationRegex.Match(name).Success && validationRegex.Match(name).Success)
            {
                var project = new Project
                { Name = name, TimeSpent = 0, Comment = comment };
                _context.Projects.Add(project);
                _context.SaveChanges();
                return Ok(project);
            }
            else
            {
                return BadRequest("Parameters can't be null.");
            }
        }

        [HttpPatch]
        [ActionName("Complex")]
        public IActionResult Update(int id, string name = "", int time = -1)
        {
            if (id > 0
                && name != null
                && validationRegex.Match(name).Success
                && validationRegex.Match(name).Success)
            {
                var project = _context.Projects.FirstOrDefault(p => p.Id == id);
                if (name != "")
                {
                    project.Name = name;
                }
                if (time >= 0)
                {
                    project.TimeSpent = time;
                }
                _context.Projects.Update(project);
                _context.SaveChanges();
                return Ok(project);
            }
            else
            {
                return BadRequest("Parameters can't be null.");
            }
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            if (id > 0)
            {
                var project = _context.Projects.FirstOrDefault(p => p.Id == id);
                _context.Projects.Remove(project);
                _context.SaveChanges();
                return Ok(id);
            }
            else
            {
                return BadRequest("Parameters can't be null.");
            }
        }
    }
}
