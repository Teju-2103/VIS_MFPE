// import React, { Component } from "react";
// import { Row, Form, Col, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { AdminLogNavibar } from '../AdminLoginNavbar';
// // const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
// class UpdatePolicies extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             policyname: '',
//             type: '',
//             validmonth: '',
//             amount: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         })

//     }
//     // componentDidMount(props) {
//     //     var Policyid = this.props.match.params.policyid;
//     //     this.GetPolicyById(Policyid);
//     // }
//     // GetPolicyById(Policyid) {
//     //     const apiUrl = BaseapiUrl + "api/Policy?id=" + Policyid;
//     //     fetch(apiUrl)
//     //         .then(res => res.json())
//     //         .then(
//     //             (result) => {
//     //                 debugger;
//     //                 if (result) {
//     //                     this.setState({
//     //                         //userid: result.ID,
//     //                         policyname: result.PolicyName,
//     //                         type:result.Type,
//     //                         validmonth:result.ValidMonth,
//     //                         amount:result.Amount

//     //                     });
//     //                 }
//     //                 else {
//     //                     alert("policy not found!")
//     //                 }
//     //             },
//     //             (error) => {
//     //                 this.setState({ IsApiError: true });
//     //             }
//     //         )
//     // }

//     // UpdatePolicy() {
//     //     debugger;
//     //     if (this.state.policyname == "" || this.state.policyname == undefined) {
//     //         alert("Plicy name is required");
//     //     }
//     //     else if (this.state.type == "" || this.state.type == undefined) {
//     //         alert("Type of vehicle is required");
//     //     } else if (this.state.validmonth == "" || this.state.validmonth == undefined) {
//     //         alert("Validmonth is required");
//     //     } else if (this.state.amount == "" || this.state.amount == undefined) {
//     //         alert("amount  is required");
//     //     }

//     //     let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
//     //     let body = {
//     //         Policyid:this.props.match.params.policyid,
//     //         PolicyName: this.state.policyname,
//     //         Type: this.state.type,
//     //         ValidMonth: this.state.validmonth,
//     //         Amount:this.state.amount
//     //     };

//     //     const requestOptions = {
//     //         method: 'PUT',
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //             Accept: "application/json",
//     //         },
//     //         body: JSON.stringify(body),
//     //     };

//     //     let baseurl = BaseapiUrl + "/api/Employee?id="+this.props.match.params.Policyid;
//     //     fetch(baseurl, requestOptions)
//     //         .then((res) => {
//     //             return res.json();
//     //         })
//     //         .then((results) => {
//     //             if (results) {
//     //                 alert("Updated successfully!");
//     //             }
//     //         })
//     //         .catch((e) => {
//     //             alert(e);
//     //         });
//     // }

//     render() {
//         return (
//             <>
//             <AdminLogNavibar/>
//             <div className="row" style={{marginLeft:"32vw"}}>
//                 <div className="container">
//                     <h2 
//                     style={{marginTop:"4rem", marginLeft:"8rem", paddingBottom:"15px"}}>
//                         Edit Policies</h2>
//                 </div>
//                 <Row>
//                     <Col sm={6} style={{marginTop:"1rem", backgroundColor:"#263341", padding:"2rem", 
//                     borderRadius:"2rem"}}>
//                         <Form onSubmit={this.handleSubmit}>
//                         <div style={{textAlign:'center' }}>
//                         <div className="col-md-4g" style={{padding:"1vw"}}>
//                             <Form.Group className="m-8 text-center" controlId="policyname">
//                                 {/* <Form.Label>Policy Name</Form.Label> */}
//                                 <Form.Control
//                                     type="text"
//                                     name="policyname"
//                                     value={this.state.policyname}
//                                     onChange={this.handleChange}
//                                     placeholder="Enter the Policy Name" 
//                                     style={{textAlign:"center"}}/>
//                             </Form.Group>
//                             </div>
//                             <div className="col-md-4g" style={{padding:"1vw"}} >
//                             <Form.Group className="m-8 text-center"  controlId="type">
//                                 {/* <Form.Label>Type</Form.Label> */}
//                                 <Form.Control
//                                     type="number"
//                                     name="type"
//                                     value={this.state.type}
//                                     onChange={this.handleChange}
//                                     placeholder="Enter the Vehicle Type" 
//                                     style={{textAlign:"center"}}/>
//                             </Form.Group>
//                             </div>
//                             <div className="col-md-4g" style={{padding:"1vw"}} >
//                             <Form.Group className="m-8 text-center"  controlId="validmonth">
//                                 {/* <Form.Label>Valid Months</Form.Label> */}
//                                 <Form.Control
//                                     type="text"
//                                     name="validmonth"
//                                     value={this.state.validmonth}
//                                     onChange={this.handleChange}
//                                     placeholder="Enter the Validity" 
//                                     style={{textAlign:"center"}}/>
//                             </Form.Group>
//                             </div>
//                             <div className="col-md-4g" style={{padding:"1vw"}}>
//                             <Form.Group className="m-8 text-center"  controlId="amount">
//                                 {/* <Form.Label>Amount</Form.Label> */}
//                                 <Form.Control
//                                     type="text"
//                                     name="amount"
//                                     value={this.state.amount}
//                                     onChange={this.handleChange}
//                                     placeholder="Enter the Amount" 
//                                     style={{textAlign:"center"}}/>
//                             </Form.Group>
//                             </div>
//                             <Form.Group>
//                                 <Link to="/Admin/PoliciesPage">
//                                 <Button variant="success" 
//                                 style={{width:"30%", marginTop:"2rem" }} 
//                                 onClick={() => this.UpdatePolicy()}>Save</Button>
//                                 </Link>
//                             </Form.Group>
//                             </div>
//                         </Form>
//                     </Col>
//                 </Row>
//             </div>
//             </>
//         )

//     }
// }
// export default UpdatePolicies;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
 //const BaseapiUrl = 'http://virtualsolution.adequateshop.com:168';
 const UpdatePolicies = () => {
    //const navigate = useNavigate();
    const { id } = useParams();
    const navigate=useNavigate();
    console.log("ID>>>>>>>>>>>>>>>>", id);
    
    const [policy, setPolicy] = useState({
      Id:0,
      name: "",
      vehicleType: "",
      validMonths: "",
      amount: ""
      
    });
   
    const { Id,name, vehicleType, validMonths, amount } = policy;
    const onInputChange = (e) => {
      setPolicy({ ...policy, [e.target.name]: e.target.value });
    };
    useEffect(() => {
      loadPolicy();
    }, []);
  
    const onSubmit = async (e) => {
        console.log(policy);
        console.log(id);
      e.preventDefault();
      
      const validMonth=parseInt(policy.validMonths);
      const amount=parseInt(policy.amount);
      policy.validMonths=validMonth;
      policy.amount=amount;
      console.log(policy);
      const policyId=id;
      await axios.put("http://localhost:27601/api/AdminPolicy/UpdatePolicy",policy,{params:{
        policyId
      }})
      .then((response)=>{
        if(response.data.statusCode===200)
        {
           alert('Update Successfully');
           navigate("/Admin/PoliciesPage");
        }
        else
           alert('Update failed');
      })
      
    };
  
  
    const loadPolicy = async () => {
      
  
          axios.get("http://localhost:27601/api/AdminPolicy/GetPoliciesByID",{params:{
             id
            }}) .then((response)=>{
                setPolicy(response.data)
            })
      
    };
    console.log(policy);
        return (
            <div className="row" style={{marginLeft:"32vw"}}>
                <div className="container">
                    <h2 
                    style={{marginTop:"4rem", marginLeft:"8rem", paddingBottom:"15px"}}>
                        Edit Policies</h2>
                </div>
                <Row>
                    <Col sm={6} style={{marginTop:"1rem", backgroundColor:"#263341", padding:"2rem", 
                    borderRadius:"2rem"}}>
                        <Form onSubmit={(e) => onSubmit(e)}>
                        <div style={{textAlign:'center' }}>
                        <div className="col-md-4g" style={{padding:"1vw"}}>
                            <Form.Group className="m-8 text-center" controlId="policyname">
                                {/* <Form.Label>Policy Name</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter the Policy Name" 
                                    style={{textAlign:"center"}}/>
                            </Form.Group>
                            </div>
                            <div className="col-md-4g" style={{padding:"1vw"}} >
                            <Form.Group className="m-8 text-center"  controlId="type">
                                {/* <Form.Label>Type</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="vehicleType"
                                    value={vehicleType}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter the Vehicle Type" 
                                    style={{textAlign:"center"}}/>
                            </Form.Group>
                            </div>
                            <div className="col-md-4g" style={{padding:"1vw"}} >
                            <Form.Group className="m-8 text-center"  controlId="validmonth">
                                {/* <Form.Label>Valid Months</Form.Label> */}
                                <Form.Control
                                    type="number"
                                    name="validMonths"
                                    value={validMonths}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter the Validity" 
                                    style={{textAlign:"center"}}/>
                            </Form.Group>
                            </div>
                            <div className="col-md-4g" style={{padding:"1vw"}}>
                            <Form.Group className="m-8 text-center"  controlId="amount">
                                {/* <Form.Label>Amount</Form.Label> */}
                                <Form.Control
                                    type="number"
                                    name="amount"
                                    value={amount}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Enter the Amount" 
                                    style={{textAlign:"center"}}/>
                            </Form.Group>
                            </div>
                            <Form.Group>
                                
                                <Button variant="success" 
                                style={{width:"30%", marginTop:"2rem" }} 
                                type="submit">Save</Button>
                                {/* onClick={() => this.UpdatePolicy()} */}
                                
                            </Form.Group>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }

export default UpdatePolicies;