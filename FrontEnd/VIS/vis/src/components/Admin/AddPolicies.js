import axios from 'axios';
import React, {Component} from 'react';
import {Container,Row,Col, Button, reset, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import { AdminLogNavibar } from '../AdminLoginNavbar';

class AddPolicies extends Component {

    constructor(props) {
        super(props)
        this.state = {
          name: '',
          isValidName: '',
          vehicleType: '',
          isValidVehicleType: '',
          validMonths: '',
          isValidValidMonths: '',
          amount: '',
          isValidAmount: '',
          redirect: null,
          errors: {
          }
        };
        //const history = useHistory();
        this.submitHandler = this.submitHandler.bind(this);
      }

    submitHandler(event) {
        event.preventDefault();
        const data={
                        Name:document.getElementById('name').value,
                        VehicleType:document.getElementById('type').value,
                        ValidMonths:parseInt(document.getElementById('validmonth').value),
                        Amount:parseInt(document.getElementById('amount').value),
                        
                   };
        console.log(data);
        const apiurl="http://localhost:27601/api/AdminPolicy/AddPolicy";
        axios.post(apiurl,data).then((response)=>{
            console.log(response.data);
            if(response.data.statusCode==200)
                this.setState({redirect:"/Admin/PoliciesPage"});
            else
                alert("failed");
            })
    }


    render()
    {
        const {    isValidName,  isValidVehicleType,isValidValidMonths,isValidAmount, errors  } = this.state;
    //swal("Here's a message!");
    if (this.state.redirect) {
        return  <Navigate to={this.state.redirect} />
      }
        return(
            <>
            <AdminLogNavibar/>
            <div className="container text-white col-4 font-weight-bold"
            style={{padding:"15px", paddingBottom:"-20px", backgroundColor:"#263341", 
            borderRadius:"15px", marginTop:"70px"}}>
                <div >
                    <div className="col-10">
                        <h3 className='text-center' 
                        style={{marginLeft:"5vw", paddingTop:"2vw", paddingBottom:"5px"}}>Add Policies</h3>
                    </div>
                </div>
                <div className="container text-white font-weight-bold" 
                style={{marginTop:"50px", maxWidth:'400px', marginLeft: "2vw"}} >
                    <Form onSubmit={this.submitHandler}>            
                        <table>
                            <tbody>
                                <tr>
                                <td><label>Policy Name</label></td>
                                <td><input className='container' type="text" id="name" placeholder='Enter Policy Name'
                                style={{width:"20vw",borderRadius:"5px", textAlign:"center", margin:"5px"}}
                                required/></td>
                                </tr>
                                <tr>
                                <td><label>Vehicle Type</label></td>
                                <td><input className='container' type="text" id="type" placeholder='Enter Vehicle Type' 
                                    style={{width:"20vw",borderRadius:"5px", textAlign:"center", margin:"5px"}}
                                    required/></td>
                                </tr>
                                <tr>
                                <td><label>Validity</label></td>
                                <td><input className='container' type="text" id="validmonth" placeholder='Enter Validity Period'
                                    style={{width:"20vw",borderRadius:"5px", textAlign:"center", margin:"5px"}}
                                    required/></td>
                                </tr>
                                <tr>
                                <td><label>Amount</label></td>
                                <td><input className='container' type="text" id="amount" placeholder='Enter Amount'
                                    style={{width:"20vw",borderRadius:"5px", textAlign:"center", margin:"5px"}}
                                    required/></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='m-2'>
                            <td><Button variant="success" style={{width:"13vw", marginTop:"2rem", 
                            marginLeft:"5rem"}} type="submit"> 
                            Submit </Button></td>
                        </div>
                            </Form>
                </div>
             </div>
             </>
        )
    }
}

export default AddPolicies;