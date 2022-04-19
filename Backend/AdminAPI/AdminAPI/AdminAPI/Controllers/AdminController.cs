using AdminAPI.Models;
using AdminAPI.Repository;
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

namespace AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository repo;
        private readonly ILogger _logger;
        public AdminController(IAdminRepository repo, ILogger<AdminController> logger)
        {
            this.repo = repo;
            _logger = logger;
        }

        [HttpPost]
        [Route("GetAdminDetails")]
        public ActionResult<Admin> GetAdminDetails(LoginModel login)
        {
            _logger.LogInformation(nameof(GetAdminDetails) + " method invoked");
            var admin = repo.GetAdmin(login);
            if (admin == null)
                return NotFound();
            return Ok(admin);
        }

        [HttpPost]
        [Route("AdminLogin")]
        public ActionResult<string> Login(LoginModel login)
        {
            _logger.LogInformation(nameof(Login) + " method invoked");
            login.UserRole = "Admin";
            string token;
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
            }
            return token;
        }

        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        //public IActionResult Get()
        // {
        //     return Ok("Inside Ok method");
        // }


    }
}
