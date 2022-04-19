// import React, { Component } from 'react'
// import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap"
// import { Link } from "react-router-dom";
// import { AdminLogNavibar } from '../AdminLoginNavbar';
// class RequestPolicies extends Component {
//   render() {
//     const bStyle={
//         color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
//       }
       
//     return (
//        <>
//        <AdminLogNavibar/>


// <div className="table-responsive">
// <div className="text-center">
//                     <h1 className='text-center' style={{marginTop:"60px"}}>Requested Policies</h1>
//         </div>
//       <table className="table table-striped table-bordered text-center"
//       style={{width:"80%", marginLeft:"9vw ", marginTop:"70px", justifyContent:"center"}}>
//       {/* <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>*/}
//       <thead className='thead' >
//     <tr>
//       <th scope="col">Username</th>
//       <th scope="col">Request</th>
//       <th scope="col">Policy Name</th>
//       <th scope="col">RC Number</th>
//       <th scope="col">Validity</th>
//       <th scope="col">Amount</th>
//       <th scope="col">Vehicle Type</th>
//       <th scope="col">License Number</th>
//     </tr>
//   </thead>
//       <tbody>
//       <tr>
//         <td  style={bStyle}></td>
//         <td style={bStyle} ></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}></td>
//         <td style={bStyle}>
//                 <Button className="btn btn-danger mg-2" variant="primary" type="submit"
//                 style={{marginRight:'10px', justifyContent:'center', paddingLeft:'30px', paddingRight:'30px'}}>
//                     Accept</Button>
//             <Button className="btn btn-danger md-2" variant="primary" type="submit" 
//             style={{justifyContent:'center', paddingLeft:'30px', paddingRight:'30px'}}>
//                 Reject</Button>
//         </td>
//          </tr>
      
     
// </tbody>
// </table>

// </div>
// </>
// )
//   }
// }

// export default RequestPolicies
import React, { Component } from 'react'
import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import { AdminLogNavibar } from '../AdminLoginNavbar';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

       

function RequestPolicies() {
  const bStyle={
             color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
          }
  const navigate = useNavigate();
 const [data, setData] = useState([]);
 
 const baseUrl = "http://localhost:27601/api/AdminRequest/AdminRequestList";



 const token = localStorage.getItem("token");
 const authAxios = axios.create({
   baseURL: baseUrl,
   headers: {
     Authorization: `Bearer ${token} `,
   },
 });


 useEffect(() => {
   GetData();
 }, []);

 const GetData = async () => {
     const result = await authAxios.get(baseUrl);
     setData(result.data);
 };



 const UpdateStatus=async(obj,status)=>{
     const requestId=obj.id;
     obj.Status=status
    console.log(obj)
    await axios.put("http://localhost:27601/api/AdminRequest/UpdateRequestStatus",obj,{params:{   
     requestId
   }})
   .then((response)=>{
     if(response.data.statusCode===200)
     {
        alert('Status Updated');
        navigate("/Admin/RequestPolicies");
     }
     else
        alert('Update failed');
   })


     GetData();
 }

    return (
       <>
       <AdminLogNavibar/>


<div className="table-responsive">
<div className="text-center">
                    <h1 className='text-center' style={{marginTop:"60px"}}>Requested Policies</h1>
        </div>
      <table className="table table-striped table-bordered text-center"
      style={{width:"80%", marginLeft:"9vw ", marginTop:"70px", justifyContent:"center"}}>
      {/* <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>*/}
      <thead className='thead' >
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Request</th>
      <th scope="col">PolicyId</th>
      <th scope="col">VehicleRegistrationId</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
      <tbody>
      {data.map((e) => (
      <tr>
        <td style={bStyle}>{e.userId}</td>
        <td style={bStyle} >{e.requestType}</td>
        <td style={bStyle}>{e.policyid}</td>
        <td style={bStyle}>{e.vehicleRegistrationId}</td>
        <td style={bStyle}>{e.status}</td>
        <td style={bStyle}>
                <Button className="btn btn-danger mg-2" variant="primary" type="submit" 
                style={{marginRight:'10px', justifyContent:'center', paddingLeft:'30px', paddingRight:'30px'}} onClick={() => {UpdateStatus(e,'Approved')}}>
                    Accept</Button>
            <Button className="btn btn-danger md-2" variant="primary" type="submit" 
            style={{justifyContent:'center', paddingLeft:'30px', paddingRight:'30px'}} onClick={() => {UpdateStatus(e,'Rejected')}}>
                Reject</Button>
        </td>
         </tr>
         ))}
      
     
</tbody>
</table>
</div>
</>
)
  }


export default RequestPolicies