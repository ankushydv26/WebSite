import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import "./card.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height:'80%'
  },
  details: {
    display: "flex",
    flexDirection: "end",
    background: '#f0f3f5'
  },
  content: {
    // flex: "1 0 auto",
    marginBottom: '28px'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        {/* <CardMedia
          className={classes.cover}
          image="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2020/02/cameras-resized.jpg"
          title="Live from space album cover"
        /> */}
        <img
          width="173"
          height="118"
          src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2020/02/cameras-resized.jpg"
          class="attachment-full size-full lazyloaded"
          alt=""
          data-lazy-src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2020/02/cameras-resized.jpg"
          data-was-processed="true"
        />
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            CATCH BIG {""}<b>DEALS</b><br/>
            ON THE CAMERA
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
