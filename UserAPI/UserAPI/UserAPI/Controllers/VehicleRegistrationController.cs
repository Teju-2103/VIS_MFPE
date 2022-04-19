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
    public class VehicleRegistrationController : ControllerBase
    {
        private readonly IVehicleRepository repo;
        private readonly ILogger _logger;
        public VehicleRegistrationController(IVehicleRepository repo, ILogger<VehicleRegistrationController> logger)
        {
            this.repo = repo;
            _logger = logger;
        }

        [HttpGet]
        [Route("VehicleList")]
        public IEnumerable<VehicleRegistration> VehicleList(int userId)
        {
            _logger.LogInformation(nameof(VehicleList) + " method invoked");
            var list = repo.Get(userId);
            return list;
        }

        [HttpPost]
        [Route("Register")]
        public Response AddVehicle(VehicleRegistration vehicleRegistration)
        {
            try
            {
                _logger.LogInformation(nameof(AddVehicle) + " method invoked");
                bool res = repo.AddNewVehicle(vehicleRegistration);
                if (!res)
                    return new Response { StatusMsg = "Registration failed", StatusCode = 400 };

                return new Response { StatusMsg = "Registration successfully", StatusCode = 200 };
            }
            catch (Exception e)
            {
                //Console.WriteLine(e.Message.ToString());
                _logger.LogInformation("Error occured from " + nameof(AddVehicle) + " Error Message :" + e.Message);
                throw;
            }

        }
    }
}
