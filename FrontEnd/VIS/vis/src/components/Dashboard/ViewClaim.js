// //import Button from '@restart/ui/esm/Button';
// import React, { Component } from 'react'
// import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap"
// import { Link } from "react-router-dom";
// import { LoginNavibar } from '../LoginNavbar';
// class ViewClaim extends Component {
//   render() {
//     const bStyle={
//         color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
//       }
       
//     return (
//        <>
//        <LoginNavibar/>
//         <div className="table-responsive">
//         <div className="text-center">
//                             <h2 className='' 
//                             style={{marginTop:"65px", marginLeft:"-5%"}}>Claim Status</h2>
//                 </div>
//               <table className="table table-striped table-bordered text-center" 
//               style={{width:"70%", marginLeft:"15%", marginTop:"70px", justifyContent:"center"}}>
//               <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>
//                 <tr>
//                   <th scope="col">Policies</th>
//                   <th scope="col">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//               <tr>
//                 <td  style={bStyle}>Policy 1</td>
//                 <td >Pending....</td>
//                 </tr>
//               <tr>
//                 <td  style={bStyle}>Policy 2</td>
//                 <td >Pending....</td>
              
//               </tr>
//               <tr>
//                 <td  style={bStyle}>Policy 3</td>
//                 <td >Pending....</td>
              
//               </tr>
//               <tr>
//                 <td  style={bStyle}>Policy 4</td>
//                 <td >Pending....</td>
                
//               </tr>
//               </tbody>
//               </table>
//         </div>
//         </>
//         )
//   }
// }

// export default ViewClaim
//import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button,Row} from "react-bootstrap"
import { Link } from "react-router-dom";
import { LoginNavibar } from '../LoginNavbar';
import SubscriberPolicies from './SubscriberPolicies';

function ViewClaim() {
  const bStyle={
             color: "#263341", fontWeight: "bold" ,textAlign:"center"
          }
  const [ClaimDetails, setClaimDetails] = useState([])
  var userId=sessionStorage.getItem('userId');
  axios.get("http://localhost:64277/api/Request/RequestList",{params:{userId:userId,requestType:"Claim"}}).then((response) => {
    setClaimDetails(response.data)
  })

  console.log(ClaimDetails);
if(ClaimDetails.length==0){
            
          }
    return (
       <>
       {/* <LoginNavibar/>
        <div className="table-responsive">
        <div className="text-center">
                            <h2 className='text-center' 
                            style={{marginTop:"65px", marginLeft:"-5%"}}>Claim Status</h2>
                </div>
                {ClaimDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
                 marginTop:'40px', padding:'40px', justifyContent:'center'}}>
                 You are not claimed to any policies!</h4></Row>):
              <table className="table table-striped table-bordered text-center" 
              style={{width:"70%", marginLeft:"15%", marginTop:"70px", justifyContent:"center"}}>
              <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>
                <tr>
                  <th scope="col">Policies</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {ClaimDetails.map((e) => (
              <tr>
                <td  style={bStyle}>{e.policyname}</td>
                <td  style={bStyle}>{e.status}</td>

                </tr>
                ))}
              </tbody>
              </table>
}
        </div>
         */}
         <LoginNavibar/>
      <div className="table-responsive">
        <div className="text-center">
                    <h1 className='text-center' 
                    style={{margin:"60px"}}>Subscriber Policies</h1>
        </div>
        {ClaimDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
    marginTop:'40px', padding:'40px', justifyContent:'center'}}>
      You are not claimed to any policies!</h4></Row>):
      <table className="table table-striped table-bordered text-center" 
      style={{width:"70%", marginLeft:"15vw ", marginTop:"70px", justifyContent:"center"}}>
        <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>
          <tr>
          <th scope="col">Vehicle Id</th>
          <th scope="col">Policy Id</th>
            <th scope="col">Request Type</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {ClaimDetails.map((e) => (
        <tr>
          <td  style={bStyle}>{e.vehicleRegistrationId}</td>
          <td  style={bStyle}>{e.policyid}</td>
          <td  style={bStyle}>{e.requestType}</td>
          <td  style={bStyle}>{e.status}</td>

        </tr>
        ))}
        
        </tbody>
      </table>
}
    </div>
        </>
        )
  }


export default ViewClaim
