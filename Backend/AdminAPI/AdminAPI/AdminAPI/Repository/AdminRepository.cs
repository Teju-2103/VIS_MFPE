using AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminAPI.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly AdminContext context;
        public AdminRepository(AdminContext context)
        {
            this.context = context;
        }

        public Admin GetAdmin(LoginModel login)
        {
            var admin = (from i in context.Admin
                         where i.Username == login.Username && i.Password == login.Password
                         select i).FirstOrDefault();
            if (admin == null)
                return null;
            return new Admin { Username = admin.Username, Password = admin.Password };
            //return context.Admin.Where(x => x.Username == login.Username && x.Password == login.Password).FirstOrDefault();
        }
    }
}
