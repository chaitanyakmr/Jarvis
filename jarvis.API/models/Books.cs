using System;
using System.Collections.Generic;

namespace jarvis.API.models
{
    public partial class Books
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
    }
}
