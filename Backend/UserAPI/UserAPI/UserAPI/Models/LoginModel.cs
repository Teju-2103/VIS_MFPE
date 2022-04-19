using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAPI.Models
{
    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }

        public string UserRole { get; set; }
    }
}
