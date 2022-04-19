import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import {Navigate} from "react-router-dom";
import { Navibar } from '../Navibar';
class AdminLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          isValidUserName: '',
          password: '',
          isValidPassword: '',
          redirect: null,
          errors: {
          }
        };
        //const history = useHistory();
        this.nameHandler=this.nameHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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

    submitHandler(event) {
        event.preventDefault();
        const data={
                        Username:document.getElementById('username').value,
                        Password:document.getElementById('password').value,
                        UserRole:"Admin"
                   };
        console.log(data);

        const apiurl="http://localhost:27601/api/Admin/AdminLogin";
        axios.post(apiurl,data).then((response)=>{
            console.log(response.data);
            // const userId=localStorage.setItem('userId',response.data.userId);
            this.setState({redirect:"/Admin/AdminDashboard"});
        })
        // .catch((res)=>
        // alert("username or password is incorrect"));
    }
    findFormErrors=()=>{
        const newErrors = {};
        
        const { userName, mobile, password, confirmPassword } = this.state
        
        this.userNameValidation(newErrors,userName);
        this.passwordValidation(newErrors,password)
        console.log(newErrors);
        return newErrors
    }
  render() {
    const {    isValidUserName,  isValidPassword, errors  } = this.state;
    //swal("Here's a message!");
    if (this.state.redirect) {
        return  <Navigate to={this.state.redirect} />
      }
    return (
        <>
      <Navibar/>
        <div className="container"
        style={{marginTop:"65px"}}>
        <div className="row">
            <div className="col">

            </div>
            <div className="m-2 text-white col-5"
            style={{padding:"40px", backgroundColor:"#263341", borderRadius:"15px"}}>
                <Form onSubmit={this.submitHandler}>
                    <h1 className='text-center'>VIS</h1>
                    <p className='text-center'>Hey Admin, Login to your VIS account</p>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Admin Name</Form.Label>
                        <Form.Control type="text" placeholder="Admin, Enter your name"
                        isValid={ isValidUserName } isInvalid={ !!errors.userName }  
                        style={{textAlign:'center'}} id="username"  onChange={this.nameHandler} required/>
                        <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                   <Form.Control.Feedback type="invalid"><b>{ errors.userName }</b></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" 
                        isValid={ isValidPassword } isInvalid={ !!errors.password } 
                        style={{textAlign:'center'}} id="password"  onChange={this.passwordHandler}
                        required/>
                        <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.password }</b></Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-center" >
                        <Button className="btn btn-secondary" type="submit"
                        style={{margin:"10px", width:"50%"}}>Sign In</Button>
                    </div>
                </Form>
            </div>
            <div className="col">

            </div>
        </div>
    </div>
    </>
    )
  }
}

export default AdminLogin


