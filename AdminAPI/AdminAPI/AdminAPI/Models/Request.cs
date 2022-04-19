using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AdminAPI.Models
{
    public class Request
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }
        [ForeignKey("VehicleRegistration")]
        public int? VehicleRegistrationId { get; set; }
        public VehicleRegistration VehicleRegistration { get; set; }

        [ForeignKey("Policy")]
        public int policyid { get; set; }
        public virtual Policy Policy { get; set; }
        [Required]
        public string RequestType { get; set; }
        [Required]
        public string Status { get; set; }
    }
}
