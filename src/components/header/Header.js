import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      right:{
        display : 'flex'
      }
});

class MenuAppBar extends Component {

    constructor(props){
      super(props);
      this.state = { 
        name: "user",
        email: "demo@gmail.com",
        auth: false,
        anchorEl: null,
        picture: ''
      };
      this.logout = this.logout.bind(this);
      this.handleMenu = this.handleMenu.bind(this);
      this.handleClose = this.handleClose.bind(this);
      
    }
  
   
  logout() {
      sessionStorage.removeItem("myAppToken");
      //this.props.history.push('/');
  }
  handleMenu(event) {
    this.setState({anchorEl:event.currentTarget});
  }
  handleClose() {
    console.log('logout');
    sessionStorage.removeItem("myAppToken");
  }
  
  componentDidMount(){
      let token = sessionStorage.getItem("myAppToken");
      if( token ){
          let userData = JSON.parse(window.atob(token.split(".")[1]));    
          //TODO -- expire
          this.setState({
              name: userData["name"],
              email: userData["email"],
              auth: true,
              picture: userData["picture"]
          });
      }
      else{
          //this.props.history.push('/dashboard');
      }
  }
  
  render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {this.state.auth && (<IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>)}
            <Typography variant="h6" className={classes.title}>
              My App
            </Typography>
            {this.state.auth && (
              <div className={classes.right}>
               <Typography variant="p" className={classes.title}>
                  {this.state.name}
                </Typography>
                <Avatar alt="profile" src={this.state.picture} onClick={this.handleMenu} />
                <Menu
                      id="menu-appbar"
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}
                    >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      )
  }
}

export default withStyles(useStyles)(MenuAppBar)