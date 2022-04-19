using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PolicyWebAPI.Models
{
    public class PolicyContext:DbContext
    {
        public PolicyContext(DbContextOptions<PolicyContext> options) : base(options)
        {

        }
        public virtual DbSet<Policy> Policies { get; set; }
    }
}
