using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using NUnit.Framework;
using System.Net;
using System.Net.Http;
using System.Text;
using UserAPI.Models;

namespace UserAPI.Tests
{
    public class Tests
    {
        HttpClient SUT;
        WebApplicationFactory<Startup> server;
        [OneTimeSetUp]
        public void SetUp()
        {
            server = new WebApplicationFactory<Startup>();
            SUT = server.CreateClient();
        }
        [OneTimeTearDown]
        public void Clean()
        {
            SUT.Dispose();
        }
        [Test]
        public void GetUserDetails(LoginModel login)
        {
            //Act
            var response = SUT.GetAsync("api/User/GetUserDetails").Result;

            //Assert
            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);

        }

        [Test]
        public void AddVehicle(VehicleRegistration vehicleRegistration)
        {
            //Act
            var jsonData = JsonConvert.SerializeObject(vehicleRegistration);
            var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var response = SUT.PostAsync("api/VehicleRegistration/Register", encodedData).Result;
            //var data = JsonConvert.DeserializeObject<VehicleRegistration>(response.ToString());
            //Assert
            Assert.AreEqual(HttpStatusCode.NoContent, response.StatusCode);

        }
    }
}