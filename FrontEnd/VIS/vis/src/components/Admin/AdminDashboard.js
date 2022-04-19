import React from "react";
import { Card, CardGroup, Button,  } from "react-bootstrap";
import "./AdminCardGrid.css";
import { AdminLogNavibar } from '../AdminLoginNavbar';
const Logout = () => {

  sessionStorage.removeItem('token');}

const AdminDashboard = () => {
  return (
    <>
    <AdminLogNavibar/>
    <CardGroup className="card-group">
      <h2><b>Dashboard</b></h2>
       <div className="row" >
            <Card className="card-grid" style={{width:"26%"}}>
            <Card.Img  className={"card-img"} variant="bottom" src={"https://riverbendregistry.com/wp-content/uploads/2020/09/Vehicle-Registration-Renewal.jpg"} 
            />
            <Card.Body>
            <Card.Link className='card-text' href='/Admin/UserDetails'><b>Users Details</b></Card.Link>
            </Card.Body>
            </Card>
        <Card className="card-grid" style={{width:"26%"}}>
          <Card.Img  className={"card-img"} variant="bottom" src={"https://th.bing.com/th/id/OIP.rZ5cGPgfv8tCNDqUdDV4LgHaEY?pid=ImgDet&rs=1"} />
          <Card.Body>
          <Card.Link className='card-text' href='/Admin/PoliciesPage'><b>Update Policies</b></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card-grid" style={{width:"26%"}}>
          <Card.Img  className={"card-img"} variant="bottom" src={"https://media.istockphoto.com/photos/sale-agent-deal-to-agreement-successful-car-loan-contract-with-and-picture-id1173046833?k=20&m=1173046833&s=612x612&w=0&h=7vHzy-jnYFpPp-2v4y6_VWsMQUZpEezKcRvUTTWOg8g="} />
          <Card.Body>
          <Card.Link className='card-text' href='/Admin/RequestPolicies'><b>Verification Requests</b></Card.Link>
          </Card.Body>
        </Card>
      </div>
    
    </CardGroup>
    </>
  )

}

export default AdminDashboard