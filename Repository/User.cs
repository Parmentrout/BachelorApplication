using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BachelorApplication.Repository
{
    public partial class User
    { 
        public User()
        {
            Contestants = new List<Contestant>();
        }

        [Key]
        public int UserID { get; set; }

        public string Username { get; set; }

        public virtual ICollection<Contestant> Contestants { get; set; } // Picks.FK_Picks_Users
    }
}
