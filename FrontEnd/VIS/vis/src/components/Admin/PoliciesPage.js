// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Nav, Container, Navbar, NavDropdown, ListGroup, Badge, Button } from "react-bootstrap"
// import { Link } from "react-router-dom";
// import {  Row, Table } from 'react-bootstrap';
// import { AdminLogNavibar } from '../AdminLoginNavbar';
// // class PoliciesPage extends Component {
// //   render() {
// //     const bStyle={
// //         color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
// //       }
// function PoliciesPage() {
//   const bStyle = {
//     color: "#961e1b", fontWeight: "bold", textAlign: "center"
//   }
//   const [PolicyDetails, setPolicyDetails] = useState([])
//   axios.get("http://localhost:27601/api/AdminPolicy/GetPolicies").then((response) => {
//     setPolicyDetails(response.data)
//   })
//   console.log(PolicyDetails);
//   if (PolicyDetails.length == 0) {

//   }

//   return (
//     <>
//     <AdminLogNavibar/>
//     <div className="table-responsive">
//       <div className="text-center">
//         <h1 className='text-center' style={{ marginTop: "60px" }}>Policies</h1>
//       </div>
//       {PolicyDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
//     marginTop:'40px', padding:'40px', justifyContent:'center'}}>
//       No Policies Added to update</h4></Row>):

//       <table className="table table-striped table-bordered text-center"
//         style={{ width: "80%", marginLeft: "10vw ", marginTop: "70px", justifyContent: "center" }}>
//         <thead className='thead' >
//           <tr>
//             <th scope="col">Name of the Policy</th>
//             <th scope="col">Vehicle Type</th>
//             <th scope="col">Validity</th>
//             <th scope="col">Amount</th>
//             <th scope="col">Action</th>

//           </tr>
//         </thead>
//         <tbody>
//           {PolicyDetails.map((e) => (
//             <tr>
//               <td style={bStyle}>{e.name}</td>
//               <td style={bStyle}>{e.vehicleType}</td>
//               <td style={bStyle}>{e.validMonths}</td>
//               <td style={bStyle}>{e.amount}</td>
//               <td >
//                 <Link to="/Admin/UpdatePolicies">
//                   <Button className="btn btn-danger text-center" variant="primary" type="submit"
//                     style={{ width: "9vw", margin: "4px", textAlign: 'center', justifyContent: 'center' }}>Update</Button>
//                 </Link>
//                 <Button className="btn btn-danger text-center" variant="primary" type="submit"
//                   style={{ width: "9vw", textAlign: 'center', justifyContent: 'center' }}>Delete</Button>
//               </td>
//             </tr>
//           ))}

//         </tbody>
//       </table>
// }
//       <div>
//         <Link to="/Admin/AddPolicies">
//           <button type="button" class="btn btn-danger text-center"
//             style={{
//               width: "18vw", marginLeft: "380px", marginTop: '4rem', textAlign: 'center',
//               justifyContent: 'center', fontWeight: "bold"
//             }}>Add Policies</button>
//         </Link>
//       </div>
//     </div>
// </>
//   )
// }

// export default PoliciesPage
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
function PoliciesPage() {
  const navigate = useNavigate();
  const bStyle = {
    color: "#961e1b", fontWeight: "bold", textAlign: "center"
  }
  const [PolicyDetails, setPolicyDetails] = useState([])
  axios.get("http://localhost:27601/api/AdminPolicy/GetPolicies").then((response) => {
    setPolicyDetails(response.data)
  })
  const DeletePolicy = async (policyId) => {
        
    await axios.delete("http://localhost:27601/api/AdminPolicy/DeletePolicy",{params:{
        policyId
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
  console.log(PolicyDetails);
  if (PolicyDetails.length == 0) {

  }
  
  

  return (

    <div className="table-responsive">
      <div className="text-center">
        <h1 className='text-center' style={{ marginTop: "60px" }}>Policies</h1>
      </div>
      {PolicyDetails.length==0?(<Row><h4 style={{color:'#282c34', textAlign:'center', fontSize:'20px', 
    marginTop:'40px', padding:'40px', justifyContent:'center'}}>
      No Policies Added to update</h4></Row>):

      <table className="table table-striped table-bordered text-center"
        style={{ width: "80%", marginLeft: "10vw ", marginTop: "70px", justifyContent: "center" }}>
        <thead className='thead' >
          <tr>
            <th scope="col">Name of the Policy</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Validity</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>

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
                  <Button className="btn btn-danger text-center" variant="primary" 
                    style={{ width: "9vw", margin: "4px", textAlign: 'center', justifyContent: 'center' } } onClick={()=>{
                      navigate(`/Admin/UpdatePolicies/${e.id}`);}}>Update</Button>
                
                <Button className="btn btn-danger text-center" variant="primary" type="submit"
                  style={{ width: "9vw", textAlign: 'center', justifyContent: 'center' }} onClick={()=>{ DeletePolicy(e.id) }}>Delete</Button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
}
      <div>
        <Link to="/Admin/AddPolicies">
          <button type="button" class="btn btn-danger text-center"
            style={{
              width: "18vw", marginLeft: "380px", marginTop: '4rem', textAlign: 'center',
              justifyContent: 'center', fontWeight: "bold"
            }}>Add Policies</button>
        </Link>
      </div>
    </div>

  )
}

export default PoliciesPage
