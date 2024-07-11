using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace SpaceHub.Server.Models
{
    public class Event
    {
        [Key]
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
        public string EventTime { get; set; }

        [Required]
        public bool EventPast { get; set; } = false;
    }
}
