using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public interface IRequestRepository
    {
        public bool AddRequest(Request request);
        IEnumerable<Request> Get(int userId,string requestType);
        IEnumerable<Request> Get();
        bool EditRequest(int id,Request request);
        Request Find(int id);
    }
}
