using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AdminAPI.Models;
using System.Text;
using System.Net.Http.Headers;
using Microsoft.Extensions.Logging;

namespace AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminUserOperationsController : ControllerBase
    {
        private readonly ILogger _logger;
        public AdminUserOperationsController(ILogger<AdminUserOperationsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetUserById")]
        public async Task<User> GetUserById(int id)
        {
            _logger.LogInformation(nameof(GetUserById) + " method invoked");
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.GetAsync($"UserOperations/GetUserById?id={id}").Result;
                //List<Policy> providers = new List<Policy>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<User>();
                //var data = JsonConvert.DeserializeObject<List<Policy>>(apiResponse);
                return apiResponse;
            }
        }
        [HttpGet]
        [Route("GetUsers")]
        public async Task<List<User>> GetUsers()
        {
            _logger.LogInformation(nameof(GetUsers) + " method invoked");
            //object response=new object();
            ////var response;
            //using (var client = new HttpClient())
            //{
            //    var result = await client.GetAsync("http://localhost:64277/api/User/UserList");
            //    if (result.IsSuccessStatusCode)
            //    {
            //        return result.Content.ReadAsAsync();
            //    }
            //}
            //return response;
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri("http://localhost:64277/api/");
            //    var response = client.GetAsync($"UserOperations/UserList");
            //    response.Wait();
            //    var res = response.Result;
            //    var list = res.Content.ReadAsAsync<User>();
            //    list.Wait();
            //    var userlist = list.Result;
            //    //return new Cart(1, 1, menuItemId, menuItem.Name);
            //    var result = JsonConvert.DeserializeObject<List<User>>(userlist.ToString());
            //    return result;
            //}
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.GetAsync("UserOperations/UserList").Result;
                List<User> providers = new List<User>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                string apiResponse = await response3.Content.ReadAsStringAsync();
                var data = JsonConvert.DeserializeObject<List<User>>(apiResponse);
                return data;
            }
        }

        [HttpPut]
        [Route("UpdateUserDetails")]
        public async Task<Response> UpdateUserDetails(int id,User user)
        {
            _logger.LogInformation(nameof(UpdateUserDetails) + " method invoked");
            var jsonData = JsonConvert.SerializeObject(user);
            var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
            //using (var client=new HttpClient())
            //{
            //    client.BaseAddress = new Uri("http://localhost:64277/api/");
            //    var res = client.PutAsync($"UserOperations/Edit/{id}",encodedData).Result;
            //    response=res.Content.ReadAsStringAsync().Result;
            //}
            //return response;
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.PutAsync($"UserOperations/Edit?id={id}", encodedData).Result;
                //List<Request> providers = new List<Request>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Response>();
                //var data = JsonConvert.DeserializeObject<Response>(apiResponse.ToString());
                return apiResponse;
            }
        }

        [HttpDelete]
        [Route("DeleteUser")]
        public async Task<Response> DeleteUser(int id)
        {
            _logger.LogInformation(nameof(DeleteUser) + " method invoked");
            //string response;
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri("http://localhost:64277/api/");
            //    var res = client.DeleteAsync($"UserOperations/Edit/{id}").Result;
            //    response = res.Content.ReadAsStringAsync().Result;
            //}
            //return response;
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.DeleteAsync($"UserOperations/Delete?id={id}").Result;
                //List<Request> providers = new List<Request>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Response>();
                //var data = JsonConvert.DeserializeObject<Response>(apiResponse.ToString());
                return apiResponse;
            }
        }
    }
}
