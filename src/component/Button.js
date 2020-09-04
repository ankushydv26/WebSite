import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
      <Fragment>
    <div className={classes.root}>
      <Button variant="contained" 
      style={{borderWidth:'2px',background:"#fed700",borderLeft:'0',color:'#333e48',padding:'.34em 1.217em .2em',margin:'0px',height:'56px'
      ,marginTop:'5px',
      }}>
          <SearchOutlinedIcon/>
          </Button>
    </div>
     <div style={{marginLeft:'170px',marginTop:'12px'}}> 
       <AutorenewOutlinedIcon style={{fontSize:"x-larger"}}/>
       <FavoriteBorderOutlinedIcon style={{fontSize:"x-larger",marginLeft:'70px'}}/>
       <PermIdentityOutlinedIcon style={{fontSize:"x-larger",marginLeft:'70px'}}/>
       <LocalMallOutlinedIcon style={{fontSize:"x-larger",marginLeft:'70px'}}/>
       {`$0.00`}
     </div>
     {/* <div>
       <ul>
         <li>

         </li>
       </ul>
     </div> */}
     </Fragment>
  );
}
