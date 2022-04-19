using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public class RequestRepository:IRequestRepository
    {
        private readonly UserContext context;
        public RequestRepository(UserContext context)
        {
            this.context = context;
        }

        public IEnumerable<Request> Get()
        {
            var list = from i in context.Requests
                       select i;
            return list;
        }
        public IEnumerable<Request> Get(int userId, string requestType)
        {
            var list = from i in context.Requests
                       where i.UserId == userId && i.RequestType==requestType
                       select i;
            return list;
        }
        public bool AddRequest(Request request)
        {
            context.Requests.Add(request);
            int rows = context.SaveChanges();
            return rows == 1;
        }
        public bool EditRequest(int id,Request request)
        {
            var requestEdit = context.Requests.Find(id);
            requestEdit.Status = request.Status;
            int rows = context.SaveChanges();
            return rows == 1;
        }
        public Request Find(int id)
        {
            return context.Requests.Find(id);
        }
    }
}
