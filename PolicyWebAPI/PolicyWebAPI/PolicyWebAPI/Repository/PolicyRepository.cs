using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PolicyWebAPI.Models;

namespace PolicyWebAPI.Repository
{
    public class PolicyRepository : IPolicyRepository
    {
        private readonly PolicyContext context;
        public PolicyRepository(PolicyContext context)
        {
            this.context = context;
        }

        public bool Add(Policy policy)
        {
            context.Policies.Add(policy);
            int rows = context.SaveChanges();
            return rows == 1;
        }
        public IEnumerable<Policy> Get()
        {
            var list = from p in context.Policies
                        select p;
            return list;
        }

        public bool Edit(int id,Policy policy)
        {
            var policyedit = context.Policies.Find(id);
            policyedit.Name = policy.Name;
            policyedit.VehicleType = policy.VehicleType;
            policyedit.ValidMonths = policy.ValidMonths;
            policyedit.Amount = policy.Amount;
            int rows = context.SaveChanges();
            return rows == 1;
        }

        public bool Delete(int id)
        {
            var policy = context.Policies.Find(id);
            context.Policies.Remove(policy);
            int rows = context.SaveChanges();
            return rows == 1;
            
        }

        public Policy Find(int id)
        {
            return context.Policies.Find(id);
        }
    }
}
