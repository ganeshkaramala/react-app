import React, { Component } from 'react';

export default class Dashboard extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
          name: "user",
          email: "demo@gmail.com",
          login: false,
          picture: "" 
        };
        this.logout = this.logout.bind(this);
    } 

     
    logout() {
        sessionStorage.removeItem("myAppToken");
        this.props.history.push('/');
    }
    
    componentDidMount(){
        let token = sessionStorage.getItem("myAppToken");
        if( token ){
            let userData = JSON.parse(window.atob(token.split(".")[1]));    
            //TODO -- expire
            this.setState({
                name: userData["name"],
                email: userData["email"],
                login: true,
                picture: userData["picture"]
            });

        }
        else{
            this.props.history.push('/');
        }
    }
  
    render() {
        return (
            <div>
                <h4>Hello {this.state.name} welcome back!!</h4>
            </div>
        )
    }
}
