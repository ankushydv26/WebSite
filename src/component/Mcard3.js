import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "5px 10px #888888"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography
        style={{ fontSize: "small", color: "silver", paddingLeft: "5px" }}
      >
        camera
      </Typography>
      <Typography
        style={{
          paddingLeft: "5px",
          fontSize: "1em",
          lineHeight: "1.28em",
          height: "2.54em",
          color: "blue",
        }}
      >
        Purple NX Mini F1 aparat SMART NX
      </Typography>

      <img
        width="200px"
        height="200px"
        style={{ marginLeft: "5px" }}
        src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Photocamera-300x300.jpg"
        alt="camera"
      />
      <div>
        <h4
          style={{ color: "silver", fontWeight: "normal", paddingLeft: "5px" }}
        >
          $788.00
          <span style={{ float: "right", paddingRight: "8px" }}>
            <button style={{ borderRadius: "50%" }}>
              <ShoppingCartIcon style={{ fontSize: "small", color: "blue" }} />
            </button>
          </span>
        </h4>
        <hr style={{ marginLeft: "12px", marginRight: "12px" }}></hr>
        <p
          style={{
            fontWeight: "10",
            fontSize: "12px",
            paddingLeft: "18px",
            color: "silver",
          }}
        >
          <span>
            <FavoriteBorderIcon style={{ fontSize: "small" }} />
          </span>
          Wishlist
          <span style={{float:"right",paddingRight:"12px"}}>
            <AutorenewIcon />
            Compare
          </span>
        </p>
      </div>
    </Card>
  );
}
