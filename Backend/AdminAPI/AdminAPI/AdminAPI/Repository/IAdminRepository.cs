using AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminAPI.Repository
{
    public interface IAdminRepository
    {
        Admin GetAdmin(LoginModel login);
    }
}
