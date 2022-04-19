import axios from 'axios';
import React, {Component} from 'react';
import { Form} from "react-bootstrap";
import './CardGrid.css';
import {Container,Row,Col, Button, reset} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import { LoginNavibar } from '../LoginNavbar';

class AddVehicles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          isValidName: '',
          type: '',
          isValidType: '',
          rCNumber: '',
          isValidRCNumber: '',
          licenseNumber: '',
          isValidLicenseNumber: '',
          pUCCNumber: '',
          isValidPUCCNumber: '',
          address: '',
          isValidAddress: '',
          userId:'',
          isValidUserId:'',
          redirect: null,
          errors: {
          }
        };
        //const history = useHistory();
        this.submitHandler = this.submitHandler.bind(this);
      }
    
    submitHandler(event) {
        event.preventDefault();
        //var twoVehicleId,fourVehicleId;
        const data={
                        Name:document.getElementById('name').value,
                        VehicleType:document.getElementById('type').value,
                        RCNumber:document.getElementById('rcno').value,
                        LicenseNumber:document.getElementById('licenseno').value,
                        PUCCNumber:document.getElementById('puccno').value,
                        Address:document.getElementById('address').value,
                        UserId:parseInt(sessionStorage.getItem('userId'))
                   };


                   console.log(data);
                   const apiurl="http://localhost:64277/api/VehicleRegistration/Register";
                   axios.post(apiurl,data).then((response)=>{
                       console.log(response.data.statusCode);
                       console.log(response.data);
                    //    if(response.data.vehicleType==="two" || response.data.vehicleType==="Two"){
                    //         twoVehicleId=sessionStorage.setItem('twoVehicleId',response.data.id);
                    //   }else if(response.data.vehicleType==="four" || response.data.vehicleType==="Four"){
                    //         fourVehicleId=sessionStorage.setItem('fourVehicleId',response.data.id);
                    //   }
                       if(response.data.statusCode==200)
                           this.setState({redirect:"/Dashboard/VehicleRegistration"});
                        else
                            alert("failed");
                   })
    }


    render()
    {
        const {    isValidName,  isValidType,isValidRCNumber,isValidLicenseNumber,isValidPUCCNumber,isValidAddress,isValidUserId, errors  } = this.state;
    //swal("Here's a message!");
    if (this.state.redirect) {
        return  <Navigate to={this.state.redirect} />
      }
        return(
            <>
    <LoginNavibar/>
            <div className="container text-white col-4 font-weight-bold"
            style={{padding:"15px", paddingBottom:"-20px", backgroundColor:"#263341", 
            borderRadius:"15px", marginTop:"60px"}}>
               
                <div >
                    <div className="col-10">
                        <h3 className='text-center' 
                        style={{marginLeft:"5vw", paddingTop:"2vw", paddingBottom:"5px"}}>Vehicle Details</h3>
                    </div>
                </div>
                <div className="text-white font-weight-bold" style={{marginLeft: "4vw", marginTop:"2vw"}}>
                    <Form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                {/* <td><label>Name</label></td> */}
                                <td><input type="text" id="name" placeholder='Enter your Name'
                                style={{width:"22vw", borderRadius:"5px", textAlign:"center", margin:"5px"}}
                                /></td>
                            </tr>
                            <tr>
                                {/* <td><label>Type</label></td> */}
                                <td><input type="text" id="type" placeholder='Enter Type'
                                style={{width:"22vw", borderRadius:"5px", textAlign:"center", margin:"5px"}}
                                /></td>
                            </tr>
                            <tr>
                                {/* <td><label>RC Number</label></td> */}
                                <td><input type="text" id="rcno" placeholder='Enter RC Number'
                                style={{width:"22vw", borderRadius:"5px", textAlign:"center", margin:"5px"}}/></td>
                            </tr>
                            <tr>
                                {/* <td><label>License No</label></td> */}
                                <td><input type="text" id="licenseno" placeholder='Enter License No'
                                style={{width:"22vw", borderRadius:"5px", textAlign:"center", margin:"5px"}}/></td>
                            </tr>
                            <tr>
                                {/* <td><label>PUC No</label></td> */}
                                <td><input type="text" id="puccno" placeholder='Enter PUC No'
                                style={{width:"22vw", borderRadius:"5px", textAlign:"center", margin:"5px"}}/></td>
                            </tr>
                            <tr>
                                {/* <td><label>Address</label></td> */}
                                <td><input type="text" id="address" placeholder='Enter Address'
                                style={{width:"22vw", borderRadius:"5px", textAlign:"center", margin:"5px"}}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center" style={{margin:"20px", paddingTop:'10px'}}>
                            <td><Button className="btn btn-secondary text-center" 
                            variant="danger"
                            style={{width:"9vw"}} type="submit"> Submit </Button></td>
                            <td><Button className="btn btn-secondary text-center" 
                            variant="danger" style={{width:"9vw", marginLeft:"2vw"}}> Reset </Button></td>
                    </div>
                    </Form>
                </div>
            </div>
            </>
        )
    }
}

export default AddVehicles;