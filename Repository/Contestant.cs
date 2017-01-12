using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
            Picks = new List<Pick>();
        }

        [Key]
        public int ContestantId { get; set; }

        public string Name { get; set; }

        public string ImageSource { get; set; }

        public bool IsActive { get; set; }

        public virtual ICollection<Pick> Picks { get; set; } // Picks.FK_Picks_Contestants
    }
}
