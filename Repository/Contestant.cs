using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BachelorApplication.Repository
{
    public partial class Contestant
    {
        public Contestant()
        {
            IsActive = true;
        }

        [Key]
        public int ContestantId { get; set; }

        public string Name { get; set; }

        public string ImageSource { get; set; }

        public bool IsActive { get; set; }

        [NotMapped]
        public bool HasChanged { get; set; }

        [NotMapped]
        public string UserName { get; set; }

        public virtual User User { get; set; }
    }
}
