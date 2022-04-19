using AdminAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminPolicyController : ControllerBase
    {
        private readonly ILogger _logger;
        public AdminPolicyController(ILogger<AdminPolicyController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        [Route("GetPolicyById")]
        public async Task<Policy> GetPolicyById(int id)
        {
            _logger.LogInformation(nameof(GetPolicyById) + " method invoked");
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:6649/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.GetAsync($"Policy/GetPolicyById?id={id}").Result;
                //List<Policy> providers = new List<Policy>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Policy>();
                //var data = JsonConvert.DeserializeObject<List<Policy>>(apiResponse);
                return apiResponse;
            }
        }
        [HttpGet]
        [Route("GetPolicies")]
        public async Task<List<Policy>> GetPolicies()
        {
            _logger.LogInformation(nameof(GetPolicies) + " method invoked");
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:6649/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.GetAsync("Policy/PolicyList").Result;
                List<Policy> providers = new List<Policy>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                string apiResponse = await response3.Content.ReadAsStringAsync();
                var data = JsonConvert.DeserializeObject<List<Policy>>(apiResponse);
                return data;
            }
        }

        [HttpPost]
        [Route("AddPolicy")]
        public async Task<Response> AddPolicy(Policy policy)
        {
            _logger.LogInformation(nameof(AddPolicy) + " method invoked");
            var jsonData = JsonConvert.SerializeObject(policy);
            var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:6649/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.PostAsync("Policy/AddPolicy",encodedData).Result;
                //List<Policy> providers = new List<Policy>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Response>();
                //var data = JsonConvert.DeserializeObject<List<Policy>>(apiResponse);
                return apiResponse;
            }
        }

        [HttpPut]
        [Route("UpdatePolicy")]
        public async Task<Response> UpdatePolicy(int policyId, Policy policy)
        {
            _logger.LogInformation(nameof(UpdatePolicy) + " method invoked");
            var jsonData = JsonConvert.SerializeObject(policy);
            var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
           
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:6649/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.PutAsync($"Policy/EditPolicy?id={policyId}", encodedData).Result;
                //List<Request> providers = new List<Request>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Response>();
                //var data = JsonConvert.DeserializeObject<Response>(apiResponse.ToString());
                return apiResponse;
            }
        }

        [HttpDelete]
        [Route("DeletePolicy")]
        public async Task<Response> DeletePolicy(int policyId)
        {
            _logger.LogInformation(nameof(DeletePolicy) + " method invoked");
            //var jsonData = JsonConvert.SerializeObject(policy);
            //var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");

            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:6649/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.DeleteAsync($"Policy/DeletePolicy?id={policyId}").Result;
                //List<Request> providers = new List<Request>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Response>();
                //var data = JsonConvert.DeserializeObject<Response>(apiResponse.ToString());
                return apiResponse;
            }
        }
    }
}
