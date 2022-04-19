// //import Button from '@restart/ui/esm/Button';
// import React, { Component } from 'react'
// import { useState, useEffect } from 'react';
// import { Row, Table } from 'react-bootstrap';
// import { Nav, Container, Navbar, NavDropdown ,ListGroup,Badge,Button} from "react-bootstrap"
// import { Link } from "react-router-dom";
// import { AdminLogNavibar } from '../AdminLoginNavbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// function UserDetails(props) {
//   const bStyle={
//     color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
//   }
//   const [UserDetails, setUserDetails] = useState([])
//   // var userId=localStorage.getItem('userId');	
//   // axios.get("http://localhost:64277/api/AdminUserOperations/GetUsers",
//   // {params:{'userId':userId}}).then((response)=> {
//   //   setUserDetails(response.data)
//   // })

//   // console.log(UserDetails);
//   // if(UserDetails.length==0){	
            	
//   // }
//   const [data, setData] = useState([]);
//     const baseUrl = "http://localhost:27601/api/AdminUserOperations/GetUsers";
//     const navigate = useNavigate();
//     const token = localStorage.getItem('token')
//     const authAxios = axios.create({
//         baseURL: baseUrl,
//         headers: {
//             Authorization: `Bearer ${token} `
//         }
//     })
//     // const logout = () => {
//     //     localStorage.removeItem('token');
//     //     navigate('/');
//     // }

//     useEffect(() => {
//         const GetData = async () => {
//             const result = await authAxios.get(baseUrl);
//             setData(result.data);
//             console.log(result.data);
//         }
//         GetData();

//     }
//         , [])

//         const DeleteUser = async (id) => {
        
//             await axios.delete("http://localhost:27601/api/AdminUserOperations/DeleteUser",{params:{
//                 id
//             }})
//               .then((response)=>{
//                   if(response.data.statusCode===200)
//                   {
//                       alert('Deleted Successfully');
//                       const GetData = async () => {
//                         const result = await authAxios.get(baseUrl);
//                         setData(result.data);
//                         // console.log(result.data);
            
//                     };
//                     GetData();
//                   }
//                   else
//                     alert('Delete failed');
//               })
            
            
            
          
//       };
// // class UserDetails extends Component {
// //   render() {
//     // const bStyle={
//     //     color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
//     //   }
       
//     return (
//       <>
//       <AdminLogNavibar/>
//       {
//                             data.map((item, idx) => {
//                                 return <tr key={idx}>
//     <div className="table-responsive">
//         <div className="text-center">
//                     <h1 className='text-center' style={{marginTop:"60px"}}>User Details</h1>
//         </div>
//         {UserDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
//     marginTop:'40px', padding:'40px', justifyContent:'center'}}>
//       No User Details Available</h4></Row>):

//       <table className="table table-striped table-bordered text-center" 
//       style={{width:"80%", marginLeft:"9vw ", marginTop:"70px", justifyContent:"center"}}>
//       <thead class="thead-dark" style={{backgroundColor:"#263341", color:"white"}}>
//     <tr>
//       <th scope="col">Username</th>
//       <th scope="col">Mobile Number</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//       <tbody>
//       {UserDetails.map((e) => (
//       <tr>
//         <td style={bStyle}>{e.username}</td>
//         <td style={bStyle}>{e.mobileNo}</td>
//         <td style={bStyle}>
//         <Link to="/Admin/UpdateData">
//                 <Button className="btn btn-danger mg-2" variant="primary" type="submit"
//                 style={{marginRight:'10px', justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}}>
//                     Update</Button>
//             </Link>
//             <Button className="btn btn-danger md-2" variant="primary" type="submit" 
//             onClick={()=>{ DeleteUser(item.id) }}
//             style={{justifyContent:'center', paddingLeft:'25px', paddingRight:'25px'}}>
//                 Delete</Button>
//         </td>
//         </tr>     
//         ))}
// </tbody>
// </table>
// }
// </div>
// </tr>
//                             })
//                         }
// </>
//   )
  
// }

// export default UserDetails
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, Container, Navbar, NavDropdown, ListGroup, Badge, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import {  Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// class PoliciesPage extends Component {
//   render() {
//     const bStyle={
//         color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
//       }
function UserDetails() {
  const navigate = useNavigate();
  const bStyle = {
    color: "#961e1b", fontWeight: "bold", textAlign: "center"
  }
  const [UserDetails, setUserDetails] = useState([])
  axios.get("http://localhost:27601/api/AdminUserOperations/GetUsers").then((response) => {
    setUserDetails(response.data)
  })
  const DeleteUser = async (id) => {
        
    await axios.delete("http://localhost:27601/api/AdminUserOperations/DeleteUser",{params:{
        id
    }})
      .then((response)=>{
          if(response.data.statusCode===200)
          {
              alert('Deleted Successfully');
              const GetData = async () => {
                const result = await authAxios.get(baseUrl);
                setData(result.data);
                // console.log(result.data);
    
            };
            GetData();
          }
          else
            alert('Delete failed');
      })
    };
  console.log(UserDetails);
  if (UserDetails.length == 0) {

  }
  
  

  return (

    <div className="table-responsive">
      <div className="text-center">
        <h1 className='text-center' style={{ marginTop: "60px" }}>User Details</h1>
      </div>
      {UserDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
    marginTop:'40px', padding:'40px', justifyContent:'center'}}>
      No Users are there</h4></Row>):

      <table className="table table-striped table-bordered text-center"
        style={{ width: "80%", marginLeft: "10vw ", marginTop: "70px", justifyContent: "center" }}>
        <thead className='thead' >
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {UserDetails.map((e) => (
            
            <tr>
              <td style={bStyle}>{e.userName}</td>
              <td style={bStyle}>{e.mobileNo}</td>
              <td >
                  <Button className="btn btn-danger text-center" variant="primary" 
                    style={{ width: "9vw", margin: "4px", textAlign: 'center', justifyContent: 'center' } } onClick={()=>{
                      navigate(`/Admin/UpdateData/${e.id}`);}}>Update</Button>
                
                <Button className="btn btn-danger text-center" variant="primary" type="submit"
                  style={{ width: "9vw", textAlign: 'center', justifyContent: 'center' }} onClick={()=>{ DeleteUser(e.id) }}>Delete</Button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
}
      {/* <div>
        <Link to="/Admin/AddPolicies">
          <button type="button" class="btn btn-danger text-center"
            style={{
              width: "18vw", marginLeft: "380px", marginTop: '4rem', textAlign: 'center',
              justifyContent: 'center', fontWeight: "bold"
            }}>Add Policies</button>
        </Link>
      </div> */}
    </div>

  )
}

export default UserDetails