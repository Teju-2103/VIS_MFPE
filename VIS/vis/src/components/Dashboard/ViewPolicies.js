// // //import Button from '@restart/ui/esm/Button';
// // import React, { Component } from 'react'
// // import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap"
// // import { Link } from "react-router-dom";
// // import { LoginNavibar } from '../LoginNavbar';
// // class ViewPolicies extends Component {
// //   render() {
// //     const bStyle={
// //         color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
// //       }
       
// //     return (
       

// // <>
// //     <LoginNavibar/>
// //     <div className="table-responsive" style={{textAlign:'center', marginTop:'5rem'}}>
// //     <div className="text-center">
// //         <h3 className='text-center' style={{color:'#282c34', textAlign:'center', fontSize:'45px', fontFamily:'Serif'}}>Have a look at our <b><i>&nbsp;Policies</i></b>!</h3>
// //     </div>

// //       <table className="table table-striped table-bordered text-center"
// //       style={{width:"80%", marginLeft:"10vw ", marginTop:"70px", justifyContent:"center"}}>
// //           <thead className='thead' >
// //     <tr>
// //       <th scope="col">Name of the Policy</th>
// //       <th scope="col">Vehicle Type</th>
// //       <th scope="col">Validity</th>
// //       <th scope="col">Amount</th>
      
// //     </tr>
// //   </thead>
// //       <tbody>
// //       <tr>
// //         <td  style={bStyle}></td>
// //         <td style={bStyle}></td>
// //         <td style={bStyle}></td>
// //         <td style={bStyle}></td>
// //         <td ><Link to="/SubscriberPolicies"> 
// //         <Button className="btn btn-danger text-center" variant="primary" type="button"
// //                 style={{width:"9vw", margin:"4px", textAlign:'center', justifyContent:'center'}}>Subscribe</Button>
// //         </Link>
// //         </td>
// //          </tr>
      
     
// // </tbody>
// // </table>

// // </div>
// // </>
// // )
// //   }
// // }

// // export default ViewPolicies
// //import Button from '@restart/ui/esm/Button';
// import React, { Component } from 'react'
// import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap"
// import { Link } from "react-router-dom";
// import { LoginNavibar } from '../LoginNavbar';
// class ViewPolicies extends Component {
//   render() {
//     const bStyle={
//         color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
//       }
       
//     return (
       

// <>
//     <LoginNavibar/>
//     <div className="table-responsive" style={{textAlign:'center', marginTop:'5rem'}}>
//     <div className="text-center">
//         <h3 className='text-center' style={{color:'#282c34', textAlign:'center', fontSize:'45px', fontFamily:'Serif'}}>Have a look at our <b><i>&nbsp;Policies</i></b>!</h3>
//     </div>

//       <table className="table table-striped table-bordered text-center"
//       style={{width:"80%", marginLeft:"10vw ", marginTop:"70px", justifyContent:"center"}}>
//           <thead className='thead' >
//     <tr>
//       <th scope="col">Name of the Policy</th>
//       <th scope="col">Vehicle Type</th>
//       <th scope="col">Validity</th>
//       <th scope="col">Amount</th>
      
//     </tr>
//   </thead>
//       <tbody>
//       <tr>
//         <td  style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td ><Link to="/SubscriberPolicies"> 
//         <Button className="btn btn-danger text-center" variant="primary" type="button"
//                 style={{width:"9vw", margin:"4px", textAlign:'center', justifyContent:'center'}}>Subscribe</Button>
//         </Link>
//         </td>
//          </tr>
      
     
// </tbody>
// </table>

// </div>
// </>
// )
//   }
// }

// export default ViewPolicies
//import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginNavibar } from '../LoginNavbar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function ViewPolicies() {
  const navigate=useNavigate();
  const bStyle = {
    color: "#961e1b", fontWeight: "bold", textAlign: "center"
  }
  const [PolicyDetails, setPolicyDetails] = useState([])
  axios.get("http://localhost:6649/api/Policy/PolicyList").then((response) => {
    setPolicyDetails(response.data)
  })
  const subscribeRequest=async(e)=>{
    var vehicleId;
    if(e.vehicleType==="two" || e.vehicleType==="Two"){
      vehicleId=parseInt(sessionStorage.getItem('twoVehicleId'));
    }
    else if(e.vehicleType==="four" || e.vehicleType==="Four"){
      vehicleId=parseInt(sessionStorage.getItem('fourVehicleId'));
    }
    const data={
      UserId:parseInt(sessionStorage.getItem('userId')),
      VehicleRegistrationId:vehicleId,
      PolicyId:parseInt(e.id),
      RequestType:"Subscription",
      Status:"Pending"
    }
   console.log(data);
   await axios.post("http://localhost:64277/api/Request/AddRequest",data)
  .then((response)=>{
    if(response.data.statusCode===200)
    {
       alert('Request Successful');
       navigate("/Dashboard/ViewPolicies");
    }
    else
       alert('Request failed');
  })


    GetData();
}
  console.log(PolicyDetails);
  if (PolicyDetails.length == 0) {

  }

       
    return (
       

<>
    <LoginNavibar/>
    <div className="table-responsive" style={{textAlign:'center', marginTop:'5rem'}}>
    <div className="text-center">
        <h3 className='text-center' style={{color:'#282c34', textAlign:'center', fontSize:'45px', fontFamily:'Serif'}}>Have a look at our <b><i>&nbsp;Policies</i></b>!</h3>
    </div>

      <table className="table table-striped table-bordered text-center"
      style={{width:"80%", marginLeft:"10vw ", marginTop:"70px", justifyContent:"center"}}>
          <thead className='thead' >
    <tr>
      <th scope="col">Name of the Policy</th>
      <th scope="col">Vehicle Type</th>
      <th scope="col">Validity</th>
      <th scope="col">Amount</th>
      
    </tr>
  </thead>
      <tbody>
      {PolicyDetails.map((e) => (
            <tr>
              <td style={bStyle}>{e.name}</td>
              <td style={bStyle}>{e.vehicleType}</td>
              <td style={bStyle}>{e.validMonths}</td>
              <td style={bStyle}>{e.amount}</td>
        <td >
        <Button className="btn btn-danger text-center" variant="primary" type="submit"
                style={{width:"9vw", margin:"4px", textAlign:'center', justifyContent:'center'}} onClick={()=>subscribeRequest(e)}>Subscribe</Button>
        
        </td>
         </tr>
      ))}
     
</tbody>
</table>

</div>
</>
)
  }


export default ViewPolicies
