import React, { Component, Fragment } from "react";
//Icons
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AirportShuttleOutlinedIcon from "@material-ui/icons/AirportShuttleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
//css
import "./main.css";

//navbar

class main extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-all">
          <div className="top-bar">
            <span style={{ fontSize: "medium" }}>
              Welcome to Worldwide Electronics Store{" "}
            </span>
            <div className="menu-list">
              <ul id="menu">
                <li>
                  <LocationOnOutlinedIcon style={{ fontSize: "small" }} />
                  Store
                </li>
                <li>
                  <AirportShuttleOutlinedIcon style={{ fontSize: "small" }} />
                  Track your Order{" "}
                </li>
                <li>
                  <LocalMallOutlinedIcon style={{ fontSize: "small" }} />
                  Shop
                </li>
                <li>
                  <PersonOutlineOutlinedIcon style={{ fontSize: "small" }} />
                  My Account
                </li>
                <li>
                  <AutorenewOutlinedIcon style={{ fontSize: "small" }} />
                  Swictch to RTL
                </li>
              </ul>
            </div>
          </div>
          <div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default main;
