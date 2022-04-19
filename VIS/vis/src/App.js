

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navibar } from './components/Navibar';
import { LoginNavibar } from './components/LoginNavbar';
import { AdminLogNavibar } from './components/AdminLoginNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import UserDashboard from './components/Dashboard/UserDashboard';
import ViewPolicies from './components/Dashboard/ViewPolicies';
import VehicleRegistration from './components/Dashboard/VehicleRegistration';
import AddVehicles from './components/Dashboard/AddVehicles';
import SubscriberPolicies from './components/Dashboard/SubscriberPolicies';
import ViewClaim from './components/Dashboard/ViewClaim';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserDetails from './components/Admin/UserDetails';
import UpdateData from './components/Admin/UpdateData';
import UpdatePolicies from './components/Admin/UpdatePolicies';
import PoliciesPage from './components/Admin/PoliciesPage';
import AddPolicies from './components/Admin/AddPolicies';
import RequestPolicies from './components/Admin/RequestPolicies';

class App extends Component {
  render() {
  
    return (
       <>
      {/* <Navibar/> */}
      
     {/* <LoginNavibar/> */}
      {
        
      }
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/User/login' element={<UserLogin/>}></Route>
        <Route path='/User/register' element={<UserRegister/>}></Route>
        <Route path='/Dashboard/UserDashboard' element={<UserDashboard/>}></Route>
        <Route path='/Dashboard/ViewPolicies' element={<ViewPolicies/>}></Route>
        <Route path='/Dashboard/VehicleRegistration' element={<VehicleRegistration/>}></Route>
        <Route path='/AddVehicles' element={<AddVehicles/>}></Route>
        <Route path='/SubscriberPolicies' element={<SubscriberPolicies/>}></Route>
        <Route path='/ViewClaim' element={<ViewClaim/>}></Route>
        <Route path='/Admin/login' element={<AdminLogin/>}></Route>
        <Route path='/Admin/AdminDashboard' element={<AdminDashboard/>}></Route>
        <Route path='/Admin/UserDetails' element={<UserDetails/>}></Route>
        <Route path='/Admin/UpdateData/:id' element={<UpdateData/>}></Route>
        <Route path='/Admin/UpdatePolicies/:id' element={<UpdatePolicies/>}></Route>
        <Route path='/Admin/PoliciesPage' element={<PoliciesPage/>}></Route>
        <Route path='/Admin/AddPolicies' element={<AddPolicies/>}></Route>
        <Route path='/Admin/RequestPolicies' element={<RequestPolicies/>}></Route>
      </Routes>
      </>
    )
  }
}

export default App
