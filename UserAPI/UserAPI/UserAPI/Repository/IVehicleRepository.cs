using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public interface IVehicleRepository
    {
        public bool AddNewVehicle(VehicleRegistration vehicleRegistration);
        IEnumerable<VehicleRegistration> Get(int userId);
    }
}
