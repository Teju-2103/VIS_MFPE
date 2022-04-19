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
    public class RequestController : ControllerBase
    {
        private readonly IRequestRepository repo;
        private readonly ILogger _logger;
        public RequestController(IRequestRepository repo, ILogger<RequestController> logger)
        {
            this.repo = repo;
            _logger = logger;
        }
        [HttpGet]
        [Route("RequestList")]
        public IEnumerable<Request> RequestList(int userId,string requestType)
        {
            _logger.LogInformation(nameof(RequestList) + " method invoked");
            var list = repo.Get(userId,requestType);
            return list;
        }
       
        [HttpGet]
        [Route("AllRequestList")]
        public IEnumerable<Request> AllRequestList()
        {
            _logger.LogInformation(nameof(AllRequestList) + " method invoked");
            var list = repo.Get();
            return list;
        }

        [HttpGet]
        [Route("GetRequestObject")]
        public Request GetRequestObject(int requestId)
        {
            _logger.LogInformation(nameof(GetRequestObject) + " method invoked");
            var request = repo.Find(requestId);
            return request;
        }

        [HttpPost]
        [Route("AddRequest")]
        public Response AddRequest(Request request)
        {
            try
            {
                _logger.LogInformation(nameof(AddRequest) + " method invoked");
                bool res = repo.AddRequest(request);
                if (!res)
                    return new Response { StatusMsg = "Registration failed", StatusCode = 400 };

                return new Response { StatusMsg = "Registration successfully", StatusCode = 200 };
            }
            catch (Exception e)
            {
                _logger.LogInformation("Error occured from " + nameof(AddRequest) + " Error Message :" + e.Message);
                throw e;
            }

        }
        [HttpPut]
        [Route("RequestUpdate")]
        public Response EditRequest(int id, Request request)
        {
            try
            {
                _logger.LogInformation(nameof(EditRequest) + " method invoked");
                //var foundRequest = repo.Find(id);
                bool updated = repo.EditRequest(id,request);
                if (!updated)
                    return new Response { StatusMsg = "Update failed", StatusCode = 400 };

                return new Response { StatusMsg = "Updated successfully", StatusCode = 200 };
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Error occured from " + nameof(EditRequest) + " Error Message :" + ex.Message);
                throw ex;
            }

        }
    }
}
