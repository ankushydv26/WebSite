import React, { Component } from "react";
import TelegramIcon from "@material-ui/icons/Telegram";

import "./footer.css"


class footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#fed700", color: "black" }}>
        <nav style={{paddingRight:"50px",paddingLeft:"80px"}} >
          <ul style={{ listStyle: "none",padding:"10px",display:"flex", }}>
            <li style={{ display: "flex" ,paddingRight:"40px"}}>
              <span style={{ paddingTop: "5px", fontSize: "large",paddingRight:"10px" }}>
                <TelegramIcon />
              </span>{" "}
              <h4> Sign up to Newsletter</h4>
            </li>
            <li style={{paddingLeft:"90px",paddingTop:"5px"}}>
            ...and receive $20 coupon for first shopping
            </li>
            <li style={{paddingLeft:"190px"}}>
                <input 
                type="text"
                placeholder="Enter your Email Address"
                />
                <button className="stylebtn">
                    SingUp
                </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default footer;
