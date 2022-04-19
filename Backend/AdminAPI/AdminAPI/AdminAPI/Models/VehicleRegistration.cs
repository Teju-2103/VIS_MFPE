using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AdminAPI.Models
{
    public class VehicleRegistration
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string VehicleType { get; set; }
        [Required]
        public string RCNumber { get; set; }
        [Required]
        public string LicenseNumber { get; set; }
        [Required]
        public string PUCCNumber { get; set; }
        [Required]
        public string Address { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
