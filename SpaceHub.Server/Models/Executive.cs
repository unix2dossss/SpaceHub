using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace SpaceHub.Server.Models
{
    public class Executive
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ExecId { get; set; }  // Auto-incrementing primary key

        [Required]
        [StringLength(50, ErrorMessage = "Executive Name cannot be longer than 50 characters.")]
        public string ExecName { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Executive Role cannot be longer than 25 characters.")]
        public string ExecRole { get; set; }

        [Required]
        public string ExecLinkedInLink { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Favourite Celestial Object cannot be longer than 25 characters.")]
        public string ExecFavObject { get; set; }
    }
}
