// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Table } from 'react-bootstrap';
// import AddVehicles from './AddVehicles';
// import { ListGroup } from "react-bootstrap"
// import { Link } from "react-router-dom";
// import "./CardGrid.css";

// function VehicleRegistration() {
//   const [VehicleDetails, setVehicleDetails] = useState([])
//   var userId=localStorage.getItem('userId');	
//   axios.get("http://localhost:64277/api/VehicleRegistration/VehicleList",
//   {params:{userId}}).then((response)=> {
//     setVehicleDetails(response.data)
//     console.log(response.data);
//   })

//   console.log(VehicleDetails);
//   if(VehicleDetails.length==0){	
            	
//   }
//   return(
//     <div style={{margin:"50px"}}>
//         <h3 style={{color:'#282c34', textAlign:'center', fontSize:'45px', fontFamily:'Serif', paddingBottom:'45px'}}>Register your Vehicles here!</h3>
//         {VehicleDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
//     marginTop:'40px', padding:'40px', justifyContent:'center'}}>
//       No vehicles Registered?</h4></Row>):
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Type</th>
//             <th>RC Number</th>
//             <th>License No</th>
//             <th>PUC Number</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {VehicleDetails.map((e) => {
            
//             <tr>
//               <td>{e.name}</td>
//               <td>{e.vehicleType}</td>
//               <td>{e.rcNumber}</td>
//               <td>{e.licenseNumber}</td>
//               <td>{e.puccNumber}</td>
//               <td>{e.address}</td>
//             </tr>

            
// })}
//         </tbody>

//       </table>
      
//                 }
//         <div>
//         <Link to="/AddVehicles">
//           <button type="button" class="btn btn-danger text-center" 
//           style={{width:"18vw", marginLeft:"510px", marginTop:'38px', textAlign:'center', 
//           justifyContent:'center'}}>Add New Vehicles</button>
//         </Link>
//       </div>
//     </div>

//   )
// }

// export default VehicleRegistration;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Table } from 'react-bootstrap';
import AddVehicles from './AddVehicles';
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./CardGrid.css";




function VehicleRegistration() {
  const [VehicleDetails, setVehicleDetails] = useState([])
  var userId=sessionStorage.getItem('userId');	
  axios.get("http://localhost:64277/api/VehicleRegistration/VehicleList",
  {params:{'userId':userId}}).then((response)=> {
    setVehicleDetails(response.data)
  })
//var twoVehicleId,fourVehicleId;
  console.log(VehicleDetails);
  for(let i=0;i<VehicleDetails.length;i++){
    
    if(VehicleDetails[i].vehicleType==="four" || VehicleDetails[i].vehicleType==="Four"){
      var fourVehicleId=sessionStorage.setItem('fourVehicleId',VehicleDetails[i].id);
    }
    if(VehicleDetails[i].vehicleType==="two" || VehicleDetails[i].vehicleType==="Two"){
      var twoVehicleId=sessionStorage.setItem('twoVehicleId',VehicleDetails[i].id);
    }

  }
  if(VehicleDetails.length==0){	
            	
  }
  return(
    <div style={{margin:"50px"}}>
        <h3 style={{color:'#282c34', textAlign:'center', fontSize:'45px', fontFamily:'Serif', paddingBottom:'45px'}}>Register your Vehicles here!</h3>
        {VehicleDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 	
    marginTop:'40px', padding:'40px', justifyContent:'center'}}>	
      No vehicles Registered?</h4></Row>):
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>RC Number</th>
            <th>License No</th>
            <th>PUC Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {VehicleDetails.map((e) => (

            <tr>
              <td>{e.name}</td>
              <td>{e.vehicleType}</td>	
              <td>{e.rcNumber}</td>	
              <td>{e.licenseNumber}</td>	
              <td>{e.puccNumber}</td>
              <td>{e.address}</td>
            </tr>

          ))}
        </tbody>

      </Table>
      // <Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
      //   marginTop:'40px', padding:'40px', justifyContent:'center'}}>
      //     No vehicles Registered?</h4></Row>
          }
      <div>
        <Link to="/AddVehicles">
          <button type="button" class="btn btn-danger text-center" 
          style={{width:"18vw", marginLeft:"510px",
        marginTop:'38px' ,textAlign:'center', justifyContent:'center'}}>Add New Vehicles</button>
        </Link>
      </div>
    </div>

  )
}

export default VehicleRegistration;




