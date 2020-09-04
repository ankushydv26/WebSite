import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Carousel} from "react-bootstrap"

 class Slider extends Component {
    render() {
        return (
            <div  style={{width:'100%',height:'500px'}}>
            <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.logicalincrements.com/gallery/1920/822/The%20Witness%20screenshot.jpeg"
                alt="First slide"
                style={{height:'500px'}}
              />
              <Carousel.Caption>
                <h3 style={{color:'black'}}>Lorium</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn-img.myswissalps.com/images/default-source/panoramawide/19/rigi-kulm-view.jpg?sfvrsn=3cabb328_8&ch=Width,DPR&auto=format"
                alt="Third slide"
                style={{height:'500px'}}
              />
          
              <Carousel.Caption>
                <h3 style={{color:'black',fontWeight:'500',marginBottom:'300px'}}>Lorium Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://demo.studiopress.com/navigation/files/2020/01/sunset-ride-1700x660.jpg"
                alt="Third slide"
                style={{height:'500px'}}
              />
          
              <Carousel.Caption>
                <h3 > Lorium Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        );
    }
}

export default Slider;