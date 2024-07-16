using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace SpaceHub.Server.Models
{
    public class Event
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EventId { get; set; }  // Auto-incrementing primary key

        [Required]
        public string EventName { get; set; }

        [Required]
        public string EventCatergory { get; set; }

        [Required]
        public string EventDescription { get; set; }

        [Required]
        public string EventLink { get; set; }

        [Required]
        public string EventCardBG { get; set; }

        [Required]
        public DateTime EventDateTime { get; set; }

        [Required]
        public DateTime EventEndTime { get; set; }
    }
}
