using AuthorizationAPI.Models;
using AuthorizationAPI.Repository;
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

namespace AuthorizationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ITokenRepository repo;
        private readonly ILogger _logger;
        // private readonly AuthContext context;
        public AuthController(ITokenRepository repo,ILogger<AuthController> logger)
        {
            this.repo = repo;
            //this.context = context;
            _logger = logger;

        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] LoginModel login)
        {
            try
            {
                _logger.LogInformation(nameof(Login) + " method invoked");
                LoginModel logindetails = CheckCredentials(login);
                if (logindetails.Username!= null && logindetails.Password!=null)
                {
                    var token = repo.GenerateJWTToken(login.UserRole);
                    return Ok(token);
                }
                return Unauthorized("Invalid Credentails");
            }
            catch (Exception e)
            {
                _logger.LogError("Error occured from " + nameof(Login) + " Error Message: " + e.Message);
                return BadRequest(e.Message);
            }
        }


        private LoginModel CheckCredentials(LoginModel login)
        {
            try
            {
                _logger.LogInformation(nameof(CheckCredentials) + " method invoked");
                LoginModel logindetails;
                //var jsonData = JsonConvert.SerializeObject(login);
                //var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
                //using (var client = new HttpClient())
                //{
                //    var response = client.PostAsync("https://localhost:27601/api/Admin/", encodedData);
                //    var responseData = response.Result.Content.ReadAsStringAsync();
                //    logindetails = JsonConvert.DeserializeObject<LoginModel>(responseData.Result);
                //}
                //return logindetails;
                if (login.UserRole.Equals("Admin"))
                {
                    var jsonData = JsonConvert.SerializeObject(login);
                    var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
                    using (var client = new HttpClient())
                    {
                        var response = client.PostAsync("http://localhost:27601/api/Admin/GetAdminDetails", encodedData);
                        var responseData = response.Result.Content.ReadAsStringAsync();
                        logindetails = JsonConvert.DeserializeObject<LoginModel>(responseData.Result);
                    }
                    return logindetails;

                }
                else
                {
                    if (login.UserRole.Equals("User"))
                    {
                        var jsonData = JsonConvert.SerializeObject(login);
                        var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
                        using (var client = new HttpClient())
                        {
                            var response = client.PostAsync("http://localhost:64277/api/User/GetUserDetails", encodedData);
                            var responseData = response.Result.Content.ReadAsStringAsync();
                            logindetails = JsonConvert.DeserializeObject<LoginModel>(responseData.Result);
                        }
                        return logindetails;

                    }
                }
                return null;
            }
            catch (Exception e)
            {
                _logger.LogError("Error occured from " + nameof(CheckCredentials) + " Error Message: " + e.Message);
                throw e;
            }
        }
    }
}
