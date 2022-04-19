using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext context;
        public UserRepository(UserContext context)
        {
            this.context = context;
        }

        public User GetUser(LoginModel login)
        {
            var user = (from i in context.Users
                        where i.UserName == login.Username && i.Password==login.Password
                        select i).FirstOrDefault();
            if (user == null)
                return null;
            return new User { UserName = user.UserName, Password = user.Password };
            //return context.Admin.Where(x => x.Username == login.Username && x.Password == login.Password).FirstOrDefault();
        }

        public bool Add(User user)
        {
            context.Users.Add(user);
            int rows = context.SaveChanges();
            return rows == 1;
        }

        public IEnumerable<User> Get()
        {
            var users = from user in context.Users
                        select user;
            return users;
        }

        public User Find(int id)
        {
            return context.Users.Find(id);
        }

        public bool Edit(int id,User user)
        {
            var useredit = context.Users.Find(id);
            useredit.UserName = user.UserName;
            useredit.MobileNo = user.MobileNo;
            int rows = context.SaveChanges();
            return rows == 1;
        }


        public bool Delete(int id)
        {
            var user = context.Users.Find(id);
            context.Users.Remove(user);
            int rows = context.SaveChanges();
            return rows == 1;
            ;
        }
        public int GetUserId(string userName)
        {
            var user = context.Users.Where(x => x.UserName == userName).FirstOrDefault();
            if (user == null)
                return 0;
            return user.Id;
        }


    }
}
