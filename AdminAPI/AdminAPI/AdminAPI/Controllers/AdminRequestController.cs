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
    public class AdminRequestController : ControllerBase
    {
        private readonly ILogger _logger;
        public AdminRequestController(ILogger<AdminRequestController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        [Route("GetRequestById")]
        public async Task<Request> GetRequestById(int id)
        {
            _logger.LogInformation(nameof(GetRequestById) + " method invoked");
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.GetAsync($"Request/GetRequestObject?requestId={id}").Result;
                //List<Policy> providers = new List<Policy>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Request>();
                //var data = JsonConvert.DeserializeObject<List<Policy>>(apiResponse);
                return apiResponse;
            }
        }
        [HttpGet]
        [Route("AdminRequestList")]
        public async Task<List<Request>> GetRequests()
        {
            _logger.LogInformation(nameof(GetRequests) + " method invoked");
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri("http://localhost:64277/api/");
            //    var response = client.GetAsync($"Request/AllRequestList");
            //    response.Wait();
            //    var res = response.Result;
            //    var list = res.Content.ReadAsAsync<Request[]>();
            //    list.Wait();
            //    var requestlist = list.Result;
            //    //return new Cart(1, 1, menuItemId, menuItem.Name);
            //    var result = JsonConvert.DeserializeObject<List<Request>>(requestlist.ToString());
            //    return result;
            //}
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.GetAsync("Request/AllRequestList").Result;
                List<Request> providers = new List<Request>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                string apiResponse = await response3.Content.ReadAsStringAsync();
                var data = JsonConvert.DeserializeObject<List<Request>>(apiResponse);
                return data;
            }
        }

        [HttpPut]
        [Route("UpdateRequestStatus")]
        public async Task<Response> UpdateStatus(int requestId,Request request)
        {
            _logger.LogInformation(nameof(UpdateStatus) + " method invoked");
            var jsonData = JsonConvert.SerializeObject(request);
            var encodedData = new StringContent(jsonData, Encoding.UTF8, "application/json");
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri("http://localhost:64277/api/");
            //    var response = client.PutAsync($"Request/RequestUpdate?id={requestId}", encodedData);
            //    response.Wait();
            //    var res = response.Result;
            //    var list = res.Content.ReadAsAsync<Response>();
            //    list.Wait();
            //    var result = JsonConvert.DeserializeObject<Response>(list.Result.ToString());
            //    return result;
            //}
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (sender, cert, chain, sslPolicyErrors) => { return true; };



            using (var client = new HttpClient(clientHandler))
            {
                client.BaseAddress = new Uri("http://localhost:64277/api/");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response3 = new HttpResponseMessage();
                response3 = client.PutAsync($"Request/RequestUpdate?id={requestId}", encodedData).Result;
                //List<Request> providers = new List<Request>();
                var contentType = new MediaTypeWithQualityHeaderValue("application/json");
                var apiResponse = await response3.Content.ReadAsAsync<Response>();
                //var data = JsonConvert.DeserializeObject<Response>(apiResponse.ToString());
                return apiResponse;
            }
        }
    }
}
