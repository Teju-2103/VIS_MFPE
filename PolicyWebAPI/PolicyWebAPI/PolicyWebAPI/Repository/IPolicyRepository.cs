using PolicyWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PolicyWebAPI.Repository
{
    public interface IPolicyRepository
    {
        bool Add(Policy policy);

        IEnumerable<Policy> Get();

        bool Edit(int id,Policy policy);
        bool Delete(int id);
        Policy Find(int id);
    }
}
