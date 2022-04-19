using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public interface IUserRepository
    {
        User GetUser(LoginModel login);

        bool Add(User user);

        IEnumerable<User> Get();
        int GetUserId(string userName);

        bool Edit(int id,User user);

        User Find(int id);

        bool Delete(int id);
    }
}
