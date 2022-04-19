// import Button from '@restart/ui/esm/Button';
// import React, { Component } from 'react'
// import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge} from "react-bootstrap"
// import { Link } from "react-router-dom";
// import "./CardGrid.css";
// import { LoginNavibar } from '../LoginNavbar';

// class SubscriberPolicies extends Component {
//   render() {
//     const bStyle={
//         color: "#263341", fontWeight: "bold" ,textAlign:"center"
//       }
       
//     return (
//       <>
//       <LoginNavibar/>
//       <div className="table-responsive">
//         <div className="text-center">
//                     <h1 className='text-center' 
//                     style={{margin:"60px"}}>Subscriber Policies</h1>
//         </div>
//       <table className="table table-striped table-bordered text-center" 
//       style={{width:"70%", marginLeft:"15vw ", marginTop:"70px", justifyContent:"center"}}>
//         <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>
//           <tr>
//             <th scope="col">Policies</th>
//             <th scope="col">Status</th>
//             <th scope="col">Claim</th>
//           </tr>
//         </thead>
//         <tbody>
//         <tr>
//           <td  style={bStyle}>Policy 1</td>
//           <td >Pending</td>
//           <td> 
//           <Link to="/ViewClaim">
//               <Button type="submit" class="btn btn-danger" style={{marginRight:'10px',
//                 justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}}>Claim</Button>
//               </Link>
//               </td>
//         </tr>
//         <tr>
//           <td  style={bStyle}>Policy 2</td>
//           <td >Pending</td>
//           <td> 
//               <Link to="/ViewClaim">
//               <Button type="submit" className="btn btn-danger" style={{marginRight:'10px',
//                 justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}}>Claim</Button>
//               </Link>
//               </td>
//         </tr>
//         <tr>
//           <td  style={bStyle}>Policy 3</td>
//           <td >Pending</td>
//           <td> <Button type="submit" className="btn btn-danger" style={{marginRight:'10px',
//                 justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}}>Claim</Button>
//           </td>
//         </tr>
//         <tr>
//           <td  style={bStyle}>Policy 4</td>
//           <td >Pending</td>
//           <td> <Button type="submit" class="btn btn-danger" style={{marginRight:'10px',
//                 justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}}>Claim</Button></td>
//         </tr>
//         </tbody>
//       </table>
//     </div>
//     </> 
//     ) 
//   }
// }

// export default SubscriberPolicies
import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge, Row} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./CardGrid.css";
import ViewPolicies from './ViewPolicies';

import { LoginNavibar } from '../LoginNavbar';

// class SubscriberPolicies extends Component {
//   render() {
//     
       

function SubscriberPolicies() {
  const bStyle={
             color: "#263341", fontWeight: "bold" ,textAlign:"center"
          }
  const [SubscribeDetails, setSubscribeDetails] = useState([])
  var userId=sessionStorage.getItem('userId');
  console.log(userId);
  axios.get("http://localhost:64277/api/Request/RequestList",{params:{userId:userId,requestType:"Subscription"}}).then((response) => {
    setSubscribeDetails(response.data)
  })
  const claimRequest=async(e)=>{
    var vehicleId;
    if(e.vehicleType==="two" || e.vehicleType==="Two"){
      vehicleId=parseInt(sessionStorage.getItem('twoVehicleId'));
    }
    else{
      vehicleId=parseInt(sessionStorage.getItem('fourVehicleId'));
    }
    const data={
      UserId:parseInt(sessionStorage.getItem('userId')),
      VehicleRegistrationId:vehicleId,
      PolicyId:e.policyid,
      RequestType:"Claim",
      Status:"Pending"
    }
   console.log(data);
   await axios.post("http://localhost:64277/api/Request/AddRequest",data)
  .then((response)=>{
    if(response.data.statusCode===200)
    {
       alert('Request Successful');
       navigate("/Dashboard/SubscriberPolicies");
    }
    else
       alert('Request failed');
  })


    GetData();
}

  console.log(SubscribeDetails);
if(SubscribeDetails.length==0){
            
          }
    return (
      <>
      <LoginNavibar/>
      <div className="table-responsive">
        <div className="text-center">
                    <h1 className='text-center' 
                    style={{margin:"60px"}}>Subscriber Policies</h1>
        </div>
        {SubscribeDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
    marginTop:'40px', padding:'40px', justifyContent:'center'}}>
      You are not subscribed to any policies!</h4></Row>):
      <table className="table table-striped table-bordered text-center" 
      style={{width:"70%", marginLeft:"15vw ", marginTop:"70px", justifyContent:"center"}}>
        <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>
          <tr>
          <th scope="col">Vehicle Id</th>
          <th scope="col">Policy Id</th>
            <th scope="col">Request Type</th>
            <th scope="col">Status</th>
            <th scope="col">Claim</th>
          </tr>
        </thead>
        <tbody>
        {SubscribeDetails.map((e) => (
        <tr>
          <td  style={bStyle}>{e.vehicleRegistrationId}</td>
          <td  style={bStyle}>{e.policyid}</td>
          <td  style={bStyle}>{e.requestType}</td>
          <td  style={bStyle}>{e.status}</td>

          <td>
              <Button type="submit" class="btn btn-danger" style={{marginRight:'10px',
                justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}} onClick={()=>claimRequest(e)}>Claim</Button>
          
              </td>
        </tr>
        ))}
        
        </tbody>
      </table>
}
    </div>
    </> 
    ) 
  }


export default SubscriberPolicies
