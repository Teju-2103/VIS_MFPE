import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './User.css';
import axios from 'axios'
import validator from 'validator'
import { Navibar } from '../Navibar';
import {Navigate} from "react-router-dom";
class UserRegister extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            userName : '',
            isValidUserName : '',
            mobile:'',
            isValidMoblie:'',
            password:'',
            isValidPassword:'',
            confirmPassword:'',
            isValidConfirmPassword:'',
          errors:{
            },
          succ:{ 
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.nameHandler=this.nameHandler.bind(this);
        this.mobileHandler=this.mobileHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.confirmPasswordHandler=this.confirmPasswordHandler.bind(this);
      }
      nameHandler = event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidUserName:''
        });
        const newErrors = {};
        const  userName = event.target.value;
        this.userNameValidation(newErrors,userName)
      };

      userNameValidation=(newErrors,userName)=>{
        let flag=true;
        
        if ( userName === '' ) {
          newErrors.userName = ' Cannot be blank!'
          flag=false;
        }
        else{
          if ( !(userName.length>=3 &&  userName.length<15) ) {
            newErrors.userName = 'Length must be between 3 and 15 character !'
            flag=false;
          }
          if (  !(/^[A-Za-z]/.test(userName)) ) {
            newErrors.userName = ' Must start with a letter !'
            flag=false;
          }

        }
        if(flag){
          this.setState({
            isValidUserName: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

      mobileHandler = event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidMoblie:''
        });
        const newErrors = {};
        const  mobile = event.target.value;
        this.mobileValidation(newErrors,mobile)
      };

      mobileValidation=(newErrors,mobile)=>{
       
        let flag=true;
      
        if ( mobile === '' ) {
          newErrors.mobile = ' Cannot be blank!'
          flag=false;
          if ( (/^(?=.*[a-zA-Z]).*$/.test(mobile)))  {
            newErrors.password = `cannot contain letter !`
            flag=false;
          }
      }
      else{
        
        if ( !(mobile>1111111111 && mobile<9999999999) ) {
          newErrors.mobile = 'Invalid Mobile !'
          flag=false;
        }
        if ( !(mobile.length===10) ) {
          newErrors.mobile = `length=${mobile.length}, Length must be 10 digit !`
          flag=false;
        }
      }
        if(flag){
          this.setState({
            isValidMoblie: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }


      passwordHandler= event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidPassword:''
        });
        const newErrors = {};
        const  password = event.target.value;
        this.passwordValidation(newErrors,password)
      };

      passwordValidation=(newErrors,password)=>{
        let flag=true;
      if ( password === '' ) {
        newErrors.password = ' Cannot be blank!'
        flag=false;
      }
      else{
        if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)))  {
          newErrors.password = `Invalid Password !`
          flag=false;
        }
        if ( !(password.length >7 && password.length <15) ) {
          newErrors.password = `length=${password.length}, Length must be between 7 and 15 charcter !`
          flag=false;
        }
        if ( !(/^(?=.*[a-z]).*$/.test(password)))  {
          newErrors.password = `contain at least one lowercase letter !`
          flag=false;
        }
        if ( !(/^(?=.*[A-Z]).*$/.test(password)))  {
          newErrors.password = `contain at least one uppercase letter !`
          flag=false;
        }
        if ( !(/^(?=.*[0-9]).*$/.test(password)))  {
          newErrors.password = `contain at least one digit !`
          flag=false;
        }
        if ( !(/^(?=.*\W).*$/.test(password)))  {
          newErrors.password = `contain at least one special character !`
          flag=false;
        }
      }
        
        
        if(flag){
          this.setState({
            isValidPassword: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

      confirmPasswordHandler= event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidPassword:'',
          isValidConfirmPassword:''
        });
        const newErrors = {};
        const  confirmPassword = event.target.value;
        this.confirmPasswordValidation(newErrors, confirmPassword )
      };

      confirmPasswordValidation=(newErrors, confirmPassword)=>{
        const { password} = this.state
        let flag=true;
        if ( confirmPassword === '' ) {
          newErrors.confirmPassword = ' Cannot be blank!'
          flag=false;
        }
        else
        if ( password === '' ) {
          newErrors.password = ' Cannot be blank!'
          flag=false;
        }
        else{
          if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)))  {
            newErrors.password = `Invalid Password !`
            flag=false;
          }
          if(password !== confirmPassword){
            newErrors.confirmPassword = ' Passwords do not match!'
            flag=false;
          }
          
        }
        
        if(flag){
          this.setState({
            isValidPassword: true,
            isValidConfirmPassword: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

    handleSubmit(event) {
      event.preventDefault();
        const data={
                        UserName:document.getElementById('username').value,
                        MobileNo:document.getElementById('mobileno').value,
                        Password:document.getElementById('password').value,
                        ConfirmPassword:document.getElementById('confirmpassword').value
                   };
        console.log(data);
        const apiurl="http://localhost:64277/api/User/Register";
        axios.post(apiurl,data).then((response)=>{
            console.log(response.data);
            const token=localStorage.setItem('token',response.data);
            this.setState({redirect:"/User/login"});
        })
        // .catch((res)=>
        // alert("Registration failed"));
    }
    findFormErrors=()=>{
        const newErrors = {};
        
        const { userName, mobile, password, confirmPassword } = this.state
        
        this.userNameValidation(newErrors,userName);
        this.mobileValidation(newErrors,mobile)
        this.passwordValidation(newErrors,password)
        this.confirmPasswordValidation(newErrors, confirmPassword)
        console.log(newErrors);
        return newErrors
    }

      render() {
        const {    isValidUserName, isValidMoblie, isValidPassword, isValidConfirmPassword,errors  } = this.state;
        // //swal("Here's a message!");
        if (this.state.redirect) {
            return  <Navigate to={this.state.redirect} />
          }
    return (
      <>
      <Navibar/>
        <div className="container text-white col-4 font-weight-bold"
        style={{padding:"15px", paddingBottom:"-20px",backgroundColor:"#263341", borderRadius:"15px", 
        marginTop:"60px"}}>
        {/* </div><div className="container2"> */}
            <div >
                
                <div className="col-10">
                    <h1 className='text-center'
                    style={{marginLeft:"56px", padding:"10px", paddingBottom:"20px"}}>Registration</h1>
                </div>
                <div className="col " >
                </div>
            </div>
            <Form noValidate onSubmit={this.handleSubmit}>
            <div style={{align:'center' }}>

                <div className="col-md-4g" >
                <Form.Group className="m-4" controlId="formBasicFirstName" >
                  {/* <Form.Label>Full Name</Form.Label> */}
                  <Form.Control type="text" id="username" placeholder="Enter your Name" 
                  name='userName' onChange={this.nameHandler} 
                  isValid={ isValidUserName } isInvalid={ !!errors.userName } 
                  required/>
                   <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                   <Form.Control.Feedback type="invalid"><b>{ errors.userName }</b></Form.Control.Feedback>
                </Form.Group>
            </div>  
                <div className="col-md-4g">
                <Form.Group className="m-4" controlId="formBasicMobile">
                    {/* <Form.Label>Mobile</Form.Label> */}
                    <Form.Control type="text" id="mobileno" placeholder="Enter your Mobile Number" 
                    name="mobile"  onChange={this.mobileHandler} 
                    isValid={ isValidMoblie } isInvalid={ !!errors.mobile } 
                    required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.mobile }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
                <div className="col-md-4g">
                <Form.Group className="m-4" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="Password" id="password" placeholder="Enter your Password" name="password" 
                    onChange={this.passwordHandler}  
                    isValid={ isValidPassword } isInvalid={ !!errors.password } 
                    required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.password }</b></Form.Control.Feedback>
                </Form.Group>

                </div>
                <div className="col-md-4g">
                <Form.Group className="m-4" controlId="formBasicConfirmPassword">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control type="Password" id="confirmpassword" placeholder="Enter your Confirm Password" 
                    name="confirmPassword"  onChange={this.confirmPasswordHandler} 
                    isValid={ isValidConfirmPassword } isInvalid={ !!errors.confirmPassword } 
                    required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.confirmPassword }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                </div>
                <div className="text-center">
                
                    <Button className="btn btn-secondary text-center" type="submit"
                    style={{width:"30%", marginLeft:"25px" }}>Register</Button>
                
                <Link to="/user/login">
                    <Button className="m-4" variant="danger" style={{width:"30%"}}>Sign In</Button>
                </Link> 
                </div>
                <div className="col ">  
                </div>
            </div>
            </Form>
    </div>
    </>
    )
  }
}
export default UserRegister