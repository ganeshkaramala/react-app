import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/Theme";
import Header from "./components/header/Header";
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';


class App extends Component {

    constructor(props){
      super(props);
      this.state = { 
        name: "My name",
        login: false 
      };
      this.onButtonPress = this.onButtonPress.bind(this)

    }  

    onButtonPress(){
      //this.setState({login: true})
    }

    render(){
          return (
                <ThemeProvider theme={theme}>
                <Router> 
                    <div className="app"> 
                          <div className="appbar"> 
                              <Header></Header>
                          </div>
                          <div className="appbody"> 
                              <Switch> 
                                <Route exact path='/' component={Login}></Route> 
                                <Route exact path='/dashboard' component={Dashboard}></Route>
                              </Switch> 
                          </div> 
                          <div className="appfooter"> 
                          </div>  
                    </div> 
                </Router> 
            </ThemeProvider>
             
		      );
    }
}

export default App;
