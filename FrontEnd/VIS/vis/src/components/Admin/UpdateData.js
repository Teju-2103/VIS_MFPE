// import React, { Component } from "react";
// import { Row, Form, Col, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { AdminLogNavibar } from '../AdminLoginNavbar';
// import axios from 'axios';
// import {Navigate} from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";


// // const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
// // class UpdateData extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             userName : '',
// //             isValidUserName : '',
// //             userphoneno: '',
// //             isValidUserPhoneno:'',
// //             redirect: null,
// //           errors: {
// //         }
// //     };
// //         this.handleChange = this.handleChange.bind(this);
// //     }

// //     // handleSubmit(event) {
// //     //     const name = event.target.name;
// //     //     const value = event.target.value;
// //     //     this.setState({
// //     //         [name]: value
// //     //     })

// //     // }

// //     handleSubmit(event) {
// //         event.preventDefault();
// //         const data={
// //             UserName:document.getElementById('userName').value,
// //             MobileNo:document.getElementById('phoneNo').value,        
// //                    };
// //         console.log(data);
// //         const apiurl="http://localhost:27601/api/AdminUserOperations/UpdateUserDetails";
// //         axios.post(apiurl,data).then((response)=>{
// //             console.log(response.data);
// //             if(response.data.statusCode==200)
// //                 this.setState({redirect:"/Admin/PoliciesPage"});
// //             // else
// //             //     alert("failed");
// //             })
// //     }
// //     render() {
// //         const {    isValidUserName, isValidUserPhoneno, errors  } = this.state;
// //     //swal("Here's a message!");
// //     if (this.state.redirect) {
// //         return  <Navigate to={this.state.redirect} />
// //       }
// const UpdateData = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     // alert(id);
//     console.log("ID>>>>>>>>>>>>>>>>", id);
    
//     const [user, setUser] = useState({
//       Id:0,
//       username: "",
//       mobileNo: "",
//     });
   
//     const { Id,username,mobileNo } = user;
//     const onInputChange = (e) => {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     };
//     useEffect(() => {
//       loadUser();
//     }, []);
  
//     const onSubmit = async (e) => {
//       e.preventDefault();
//       debugger;
//       await axios.put("http://localhost:27601/api/AdminUserOperations/UpdateUserDetails",user,{params:{
//         id
//       }})
//       .then((response)=>{
//         if(response.data.statusCode===200)
//         {
//            alert('Edited Successfully');
//            navigate("/Admin/PoliciesPage");
//         }
//         else
//            alert('Update failed');
//       })
//       //navigate("/AdminDashboard/UserList");
//     };
  
  
//     const loadUser = async () => {
//       //const result = await axios.get(`http://localhost:3003/user/${id}`);
//       // const result=await axios.get(`http://localhost:22523/api/AdminUserOperations/GetUserById/${id}`);
//       // setUser(result.data);
  
//           // await axios.get('http://localhost:22523/api/AdminUserOperations/GetUserById/${id}')
//           //             .then((response)=>{
//           //                 setUser(response.data)
//           //             })
  
//           axios.get("http://localhost:27601/api/AdminUserOperations/GetUserById/",{params:{
//              id
//             }}) .then((response)=>{
//                 setUser(response.data)
//             })
      
//     };
//     console.log(user);
  
//         return (
//             <>
//     <AdminLogNavibar/>
//             <div className="container ">
//                  <div className="container">
//                     <h2 
//                     style={{marginTop:"4rem", paddingBottom:"15px"}}>
//                         Details of the users</h2>
//                         <hr style={{color:'white', color:"black", height:'5px',
//                         textAlign:'left',marginRight: '65vw', width:"25rem", marginTop: '0'}} />
//                 </div>
               
//                     <div className="col-sm-8 text-white" style={{marginTop:"4rem", backgroundColor:"#263341", 
//                     padding:"2rem", marginLeft:"14vw", borderRadius:"7px", }}>
//                         {/* <Form onSubmit={this.handleSubmit}> */}
//                         <Form onSubmit={(e) => onSubmit(e)}>
//                             <Form.Group controlId="username">
//                                 <Form.Label>Username</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="username"
//                                     // value={this.state.username}
//                                     // onChange={this.handleChange}
//                                     placeholder="Enter Username" 
//                                     style={{textAlign:"center"}}
//                                     id="username" value={username} 
//                                     onChange={(e) => onInputChange(e)}
//                                     // isValid={ isValidUserName } isInvalid={ !!errors.username } 
//                                     /><br></br>
//                             </Form.Group>
//                             <Form.Group controlId="mobileNo">
//                                 <Form.Label>Mobile Number</Form.Label>
//                                 <Form.Control
//                                     type="tel"
//                                     // name="userphoneno"
//                                     // value={this.state.userphoneno}
//                                     // onChange={this.handleChange}
//                                     placeholder="Enter Mobile Number" style={{textAlign:"center"}}
//                                     id="mobileNo" name="mobileNo" 
//                                     value={mobileNo}
//                                     onChange={(e) => onInputChange(e)}
//                                     // isValid={ isValidUserPhoneno } isInvalid={ !!errors.phoneNo }
//                                     /><br></br>
//                             </Form.Group>
//                             <Form.Group>
                                
//                                 <Button variant="success"  style={{width:"22%", marginTop:"2rem", marginLeft:"19vw" }} 
//                                 onClick={() => this.UpdateUser()}>Save</Button>
                                
//                             </Form.Group>
//                         </Form>
//                     </div>
//             </div>
//             </>
//         );
// }
// export default UpdateData;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateData = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // alert(id);
  console.log("ID>>>>>>>>>>>>>>>>", id);
  
  const [user, setUser] = useState({
    Id:0,
    userName: "",
    mobileNo: "",
    password:"",
    confirmPassword:""
  });
 
  const { Id,userName,mobileNo,password,confirmPassword } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    //debugger;

    //await axios.put(`http://localhost:18972/api/AdminUserOperations/${id}`, user)
    await axios.put("http://localhost:27601/api/AdminUserOperations/UpdateUserDetails",user,{params:{
      id
    }})
    .then((response)=>{
      if(response.data.statusCode===200)
      {
         alert('Edited Successfully');
         navigate("/Admin/UserDetails");
      }
      else
         alert('Update failed');
    })
    //navigate("/AdminDashboard/UserList");
  };


  const loadUser = async () => {
    //const result = await axios.get(`http://localhost:3003/user/${id}`);
    // const result=await axios.get(`http://localhost:22523/api/AdminUserOperations/GetUserById/${id}`);
    // setUser(result.data);

        // await axios.get('http://localhost:22523/api/AdminUserOperations/GetUserById/${id}')
        //             .then((response)=>{
        //                 setUser(response.data)
        //             })

        axios.get("http://localhost:27601/api/AdminUserOperations/GetUserById/",{params:{
           id
          }}) .then((response)=>{
              setUser(response.data)
          })
    
  };
  console.log(user);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">

              
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <h4>Name</h4>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              label="Name"
              name="userName"
              value={userName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br></br>

          <div className="form-group">
            <h4>Mobile No</h4>

            <input
              type="tel"
              className="form-control form-control-lg"
              placeholder="Enter Your Mobile No"
              name="mobileNo"
              value={mobileNo}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br></br>

          {/* <div className="form-group">
            <h4>Email</h4>

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Mobile No"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
          <br></br>

          {/* <div className="form-group">
            <h4 className="">UserName</h4>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName "
              name="UserName"
              value={UserName}
              onChange={(e) => onInputChange(e)}
            />
           
          </div>
          <br></br>
          <br></br> */}

          <button
            className="btn btn-warning btn-block ">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};;

export default UpdateData;