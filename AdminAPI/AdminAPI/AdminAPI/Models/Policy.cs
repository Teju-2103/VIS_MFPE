using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AdminAPI.Models
{
    public class Policy
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string VehicleType { get; set; }
        [Required]
        public int ValidMonths { get; set; }
        [Required]
        public double Amount { get; set; }
    }
}
