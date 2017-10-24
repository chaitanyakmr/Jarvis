using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using jarvis.API.models;

namespace jarvis.API.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        jarvisContext db = new jarvisContext();
        // GET api/values
        [HttpGet]
        public IEnumerable<Books> Get()
        {
            var lst = db.Books.ToList();
            return lst;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Books books)
        {
            try
            {
                var lst = db.Books.Add(books);
                db.SaveChanges();
            }
            catch (System.Exception)
            {
                throw;
            }

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}