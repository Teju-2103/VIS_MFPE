import React, { Component } from 'react'
import { Navibar } from './Navibar';
export class Home extends Component {

  render() {
    
    const mystyle={backgroundImage:'url("https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/11/22/882261-motor-insurance-dnaindia.jpg")',
      backgroundSize:'cover',
      backgroundRepeat:"no-repeat",
      backgroundPosition:'center top',
      backgroundAttachment: 'fixed',
      opacity:0.7,
      height:'600px'
  };
    return (
      <>
      <Navibar/>
        <div style={mystyle}>

          <h1 style={{color:'white', paddingTop:'10vw', paddingLeft: '6vw'}}>Vehicle Insurance System</h1>

          <hr style={{color:'white', opacity:1, 
            height:'5px',
            borderWidth:'0',
            textAlign:'left', 
            marginLeft: '6vw',
            marginRight: '65vw',
            marginTop: '0'}} />

          <p style={{color:'white', paddingLeft: '6vw'}}>Give you peace of mind, for wherever the road takes you.</p>

    </div>
</>
    )

  }

}

export default Home
