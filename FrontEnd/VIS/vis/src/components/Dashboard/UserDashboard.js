import React from "react";
import { Card, CardGroup, Button,  } from "react-bootstrap";
import { LoginNavibar } from '../LoginNavbar';
import "./CardGrid.css";
const Logout = () => {

  sessionStorage.removeItem('token');}
const UserDashboard = () => {

  return (
<>
    <LoginNavibar/>
    <CardGroup className="card-group">
      <h2><b>Dashboard</b></h2>
       <div className="row" >
        <Card className="card-grid">
          <Card.Img  className={"card-img"} variant="bottom" src={"https://riverbendregistry.com/wp-content/uploads/2020/09/Vehicle-Registration-Renewal.jpg"} 
          />
          <Card.Body >
          <Card.Link className='card-text' href='/Dashboard/VehicleRegistration'><b>Vehicle Registration</b></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card-grid" id="rightcard">
          <Card.Img  className={"card-img"} variant="bottom" src={"https://th.bing.com/th/id/OIP.rZ5cGPgfv8tCNDqUdDV4LgHaEY?pid=ImgDet&rs=1"} />
          <Card.Body>
          <Card.Link className='card-text' href='/Dashboard/ViewPolicies'><b>View Policies</b></Card.Link>
          </Card.Body>
        </Card>
        </div>
        <div className="row" >
        <Card className="card-grid">
          <Card.Img  className={"card-img"} variant="bottom" src={"https://media.istockphoto.com/photos/sale-agent-deal-to-agreement-successful-car-loan-contract-with-and-picture-id1173046833?k=20&m=1173046833&s=612x612&w=0&h=7vHzy-jnYFpPp-2v4y6_VWsMQUZpEezKcRvUTTWOg8g="} />
          <Card.Body>
          <Card.Link className='card-text' href='/SubscriberPolicies' ><b>View Subscriber Policies</b></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card-grid" id="rightcard">
          <Card.Img  className={"card-img"} variant="bottom" src={"https://media.istockphoto.com/photos/businessman-controlling-a-futuristic-display-with-claims-concept-on-picture-id1346314342?b=1&k=20&m=1346314342&s=170667a&w=0&h=vUeUodTX97j03IWKRI3r8fYf8uqoqwaoOolfGqmb6Ao="} />
          <Card.Body>
          <Card.Link className='card-text' href='/ViewClaim'><b>View Claim</b></Card.Link>
          </Card.Body>
        </Card>
      </div>
    
    </CardGroup>
    </>
  )

}

export default UserDashboard