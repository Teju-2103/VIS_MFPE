using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using UserAPI.Models;
using UserAPI.Repository;

namespace UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository repo;
        private readonly ILogger _logger;
        public UserController(IUserRepository repo,ILogger<UserController> logger)
        {
            this.repo = repo;
            _logger = logger;
        }

        [HttpPost]
        [Route("GetUserDetails")] // api/User/GetUserDetails
        public ActionResult<User> GetUserDetails(LoginModel login)
        {
            _logger.LogInformation(nameof(GetUserDetails) + " method invoked");
            var user = repo.GetUser(login);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPost]
        [Route("Login")] // api/User/Login
        public object Login(LoginModel login)
        {
            _logger.LogInformation(nameof(Login) + " method invoked");
            login.UserRole = "User";
            string token;
            int userId;
            var jsonData = JsonConvert.SerializeObject(login);
            var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
            using (var client = new HttpClient())
            {
                //var response = client.PostAsync("http://localhost:17587/api/Auth/Login", encodedData);
                //token = response.Result.Content.ReadAsStringAsync().ToString();
                //var responseData = response.Result.Content.ReadAsStringAsync();
                //token = JsonConvert.DeserializeObject<string>(responseData.Result);
                // var response = client.PostAsync("http://localhost:17587/api/Auth/Login", encodedData);
                //response.EnsureSuccessStatusCode();
                //token = response.Result.Content.ReadAsStringAsync();
                var response = client.PostAsync("http://localhost:17587/api/Auth/Login", encodedData).Result;
                token = response.Content.ReadAsStringAsync().Result;
                userId = repo.GetUserId(login.Username);
            }
            if(token=="Invalid Credentails")
                return new { token,userId,statusCode=400};
            return new { token, userId, statusCode = 200 };
        }

        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        //public IActionResult Get()
        //{
        //    return Ok("Inside Ok method");
        //}

        [HttpPost]
        [Route("Register")]  //api/User/Register

        public Response Register(User user)
        {

            try
            {
                _logger.LogInformation(nameof(Register) + " method invoked");
                if (user == null)
                    return new Response { StatusMsg = "Not Found", StatusCode = 404 };

                bool rows = repo.Add(user);
                if (!rows)
                    return new Response { StatusMsg = "Unsuccessful", StatusCode = 400 };

                return new Response { StatusMsg = "Successful", StatusCode = 200 };
            }
            catch (Exception e)
            {
                _logger.LogInformation("Error occured from "+nameof(Register)+" Error Message "+e.Message);
                throw e;
            }
        }
    }
}
