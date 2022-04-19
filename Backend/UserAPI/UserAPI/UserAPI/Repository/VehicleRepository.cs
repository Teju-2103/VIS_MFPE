using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public class VehicleRepository:IVehicleRepository
    {
        private readonly UserContext context;
        public VehicleRepository(UserContext context)
        {
            this.context = context;
        }
        public IEnumerable<VehicleRegistration> Get(int userId)
        {
            var list= from i in context.VehicleRegistrations where i.UserId==userId
                      select i;
            return list;
        }
        public bool AddNewVehicle(VehicleRegistration vehicleRegistration)
        {
            context.VehicleRegistrations.Add(vehicleRegistration);
            int rows = context.SaveChanges();
            return rows == 1;
        }
    }
}
