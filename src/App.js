/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from 'react'
import Container  from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Button from "react-bootstrap/Button"
import "./app.css"

// import Nonveg from "./image/non Veg.png"
// import Cart from "./image/foodcart.png"
// import Safe from "./image/safe.jpg"
// import Bry from "./image/briyani.jpg"
import Cart from "./Carts"

 const App = () => {
   const [range , setRange] = useState(1)
  const handleCalculation = () => {
     let price=300;
     const bill = range * price
     return bill
    
   }
  //  console.log(range)
  console.log(handleCalculation())
  return (
    <>
        <Container fluid className="fx">
          <Row className="navbar">
            <div className="logo">
              <Col >
                <h3 className="logo-text">ShreeDev  Home Delivery fast food</h3>
              </Col>
            </div>
              <Col  className="displayN" >
                <ul className="float-right list">
                  <li><a href="" >Home</a></li>
                  <li><a href="" >About</a></li>
                  <li><a href="" >Services</a></li>
                  <li><a href="" >Order </a></li>
                </ul>
              </Col>
          </Row>
        </Container>
        <Cart style={{marginTop:"300px"}}/>
         
       
    </>
  )
}


export default App;