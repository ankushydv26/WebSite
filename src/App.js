import React, { Component } from 'react'
import "./app.css";

export class App extends Component {
  render() {
    return (
      <>
       <div className="main">
         <div className="container">
           <nav>
             <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
             </ul>
           </nav>
           <div className="card">
             <div className="card-container">
               <Card/>
             </div>
           </div>
         </div>  
       </div> 
      </>
    )
  }
}

const details = [
  {title:"Card-title", content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",author:"rahul"},
  {title:"Card-title1", content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",author:"kumar"},
  {title:"Card-title2", content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",author:"afzal"},
  {title:"Card-title3", content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. .",author:"wani"},

]

const Card = ( ) =>{
  return(
    <div className="crd" >
      {details.map((detail) =>{
        return(
          <div className="content">
            {detail.title}<br/>
            {detail.content}<br/>
            {detail.author}
          </div>
        )
      })}
    </div>
  )
}

export default App
