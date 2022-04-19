using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PolicyWebAPI.Models;
using PolicyWebAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PolicyWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyRepository repo;
        private readonly ILogger _logger;
        public PolicyController(IPolicyRepository repo,ILogger<PolicyController> logger)
        {
            this.repo = repo;
            _logger = logger;
        }
        [HttpGet]
        [Route("GetPolicyById")]
        public Policy GetPolicyById(int id)
        {
            _logger.LogInformation(nameof(GetPolicyById) + " method invoked");
            var policy = repo.Find(id);
            if (policy == null)
                return null;
            return policy;
        }
        [HttpGet]
        [Route("PolicyList")]
        public IEnumerable<Policy> PolicyList()
        {
            _logger.LogInformation(nameof(PolicyList) + " method invoked");
            var list = repo.Get();
            return list;
        }

        [HttpPut]
        [Route("EditPolicy")]
        public Response Edit(int id, Policy policy)
        {
            try
            {
                _logger.LogInformation(nameof(Edit) + " method invoked");
                //var foundPolicy = repo.Find(id);
                bool updated = repo.Edit(id,policy);
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
        [Route("DeletePolicy")]
        public Response Delete(int id)
        {
            try
            {
                _logger.LogInformation(nameof(Delete) + " method invoked");
                bool deletePolicy = repo.Delete(id);
                if (!deletePolicy)
                    return new Response { StatusMsg = "Delete Unsuccessful", StatusCode = 400 };

                return new Response { StatusMsg = "Delete Successful", StatusCode = 200 };

            }
            catch (Exception e)
            {
                _logger.LogInformation("Error occured from " + nameof(Delete) + " Error Message :" + e.Message);
                throw e;
            }
        }
        [HttpPost]
        [Route("AddPolicy")]
        public Response Add(Policy policy)
        {
            try
            {
                _logger.LogInformation(nameof(Add) + " method invoked");
                bool res = repo.Add(policy);
                if (!res)
                    return new Response { StatusMsg = "Policy Addition failed", StatusCode = 400 };

                return new Response { StatusMsg = "Policy Added successfully", StatusCode = 200 };
            }
            catch (Exception e)
            {
                _logger.LogInformation("Error occured from " + nameof(Add) + " Error Message :" + e.Message);
                throw e;
            }

        }
    }
}
