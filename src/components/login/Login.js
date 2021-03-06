import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '200px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  copyright: {
    position: 'absolute',
    bottom: '0px'
  }
}));

export default function SignInSide() {
  const history = useHistory();
  const classes = useStyles();

  
  const responseGoogle = (response) => {
    console.log(response);
    sessionStorage.setItem("myAppToken",response.getAuthResponse().id_token);
    history.push("/dashboard");
  }
  
   const responseFailGoogle = (response) => {
    console.log(response);
    history.push("/");
  }


  /*<GoogleLogin
            clientId="835815994161-2eqitfbar6ec886or36qg4gbvpp9rdlj.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseFailGoogle}
            cookiePolicy={'single_host_origin'}
          />*/
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to My App!
          </Typography>

          <Typography component="h1" variant="subtitle1">
            Login up to access your App Account
        </Typography>
        <GoogleLogin
            style={{fontFamily:"Poppins"}}
            clientId="625681291727-20aodf38o4ene9ads8e3hi5n2ok5q6bn.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseFailGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </Grid>
    </Grid>
  );
}