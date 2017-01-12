using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BachelorApplication.Repository
{
    public partial class Pick
    {
        [Key]
        public int PickId { get; set; }

        public int UserId { get; set; }

        public int ContestantId { get; set; }

        public virtual Contestant Contestant { get; set; } 
        public virtual User User { get; set; }
    }
}
