using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace SpaceHub.Server.Models
{
    public class Member
    {
        [Key]
        [Required]
        public string StudentID { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "First name cannot be longer than 50 characters.")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Last name cannot be longer than 50 characters.")]
        public string LastName { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        [StringLength(100, ErrorMessage = "Email cannot be longer than 100 characters.")]
        public string Email { get; set; }

        public string Pronouns { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 7, ErrorMessage = "UPI must be between 7 and 8 characters.")]
        public string UPI { get; set; }

        [NotMapped]
        public List<string> Study { get; set; } = new List<string>();

        public string Major { get; set; }

        [Required]
        public string SemesterPlan { get; set; }

        [Required]
        public bool PayOffline { get; set; }

        // Additional property for storing the list as a single string in the database
        public string StudySerialized
        {
            get => string.Join(",", Study);
            set => Study = value?.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList() ?? new List<string>();
        }
    }
}
