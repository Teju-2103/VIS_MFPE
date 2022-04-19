using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorizationAPI.Repository
{
    public interface ITokenRepository
    {
        public string GenerateJWTToken(string userRole);
    }
}
