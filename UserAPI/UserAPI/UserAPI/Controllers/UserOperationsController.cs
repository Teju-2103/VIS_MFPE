using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;
using UserAPI.Repository;

namespace UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
    public class UserOperationsController : ControllerBase
    {
        private readonly IUserRepository repo;
        private readonly ILogger _logger;
        public UserOperationsController(IUserRepository repo,ILogger<UserOperationsController> logger)
        {
            this.repo = repo;
            _logger = logger;
        }
        [HttpGet]
        [Route("GetUserById")]
        public User GetUserById(int id)
        {
            _logger.LogInformation(nameof(GetUserById) + " method invoked");
            var user = repo.Find(id);
            return user;
        }

        [HttpGet]
        [Route("UserList")]
        public IEnumerable<User> UserList()
        {
            _logger.LogInformation(nameof(UserList) + " method invoked");
            var users = repo.Get();
            return users;
        }

        [HttpPut]
        [Route("Edit")]
        public Response Edit(int id, User user)
        {
            try
            {
                _logger.LogInformation(nameof(Edit) + " method invoked");
                //var founduser = repo.Find(id);
                bool updated = repo.Edit(id,user);
                if (!updated)
                    return new Response { StatusMsg = "Update failed", StatusCode = 400 };

                return new Response { StatusMsg = "Updated successfully", StatusCode = 200 };
            }
            catch (Exception e)
            {
                _logger.LogInformation("Error occured from " + nameof(Edit) + " Error Message :" + e.Message);
                throw e;
            }

        }

        [HttpDelete]
        [Route("Delete")]
        public Response Delete(int id)
        {
            try
            {
                _logger.LogInformation(nameof(Delete) + " method invoked");
                bool deleteUser = repo.Delete(id);
                if (!deleteUser)
                    return new Response { StatusMsg = "Delete Unsuccessful", StatusCode = 400 };

                return new Response { StatusMsg = "Delete Successful", StatusCode = 200 };

            }
            catch (Exception e)
            {
                _logger.LogInformation("Error occured from " + nameof(Delete) + " Error Message :" + e.Message);
                throw e;
            }
        }
    }
}
