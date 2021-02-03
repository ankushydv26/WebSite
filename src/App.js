import React from 'react'
import Container  from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button  from "react-bootstrap/Button"
import "./app.css"

import Nonveg from "./image/non Veg.png"
import Cart from "./image/foodcart.png"
import Safe from "./image/safe.jpg"
import Bry from "./image/briyani.jpg"

 const App = () => {
  return (
    <>
         <Container >
           <Row className="main-row">
              <Col className="Logo ml-5 p-2"> <h3> <span className="color-head">Shree</span>Dev <em>Fast Food</em> </h3> 
                  <div className="img">
                    <img src={Nonveg} alt="icon" width="20px"/>
                  </div>
              </Col>
              <Col className=" p-2">
                 <div className="img-cart">
                   <img src={Cart} alt="cart" width="24px" height="auto"/>
                      <Button variant="success" className="btn-order" >Order Now</Button>
                 </div>
              </Col>
           </Row> 
         </Container>
         <Container className="p-0" fluid>
           <div className="bg">
             <Row  className="p-3 content">
               <Col xs={12} md={6}>
                
                <h2 className="text-1 ">Get Best Food with Safe Delivery and Fast Delivery</h2>
               </Col>
               <Col xs={12} md={5} >
                <img className="ml-5 anime" src={Safe} alt="pic" width="400px" height="auto"/>
               </Col>
             </Row>
             <Row>
               <Col xs={12} md={6} className="bry-img" >
                 <img className="food" src={Bry} alt="food"  width="300px" height="auto"/>
               </Col>
               <Col xs={12} md={6} >
                 <h2 className="bry-text">Taste our Best  Briyani you Ever test</h2>
               </Col>
             </Row>

           </div>
         </Container>
      
    </>
  )
}


export default App;