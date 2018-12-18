import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import axios from 'axios'
import history from '../history';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
       username : '',
       password : '',
       email : '',
       message : ''
    }
  }

  getUsername = (e)=>{
      this.setState({
        ...this.state,
        username : e.target.value

      })
    }

  getEmail = (e)=>{
      this.setState({
        ...this.state,
        email : e.target.value

      })
    }

  getPassword = (e)=>{
      this.setState({
        ...this.state,
        password : e.target.value

      })
    }

  sendUserToServer = ()=> {
    let username = this.state.username
    let email = this.state.email
    let password = this.state.password

    axios.post('http://localhost:3005/api/register',{
        username : username,
        email : email,
        password : password
      }).then((response)=>{
      if(response.data.success == true){
       this.setState({
         message: ''
       })
       this.props.history.push('/login')
      } else{
       this.setState({
         message : response.data
      })
    }
  })
}

 componentDidMount = () => {


 }

  render() {


    return(

    <div className="loginbody">


      <div className="login-wrap">
        <div className="login-html">
         <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
         <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label>
         <div className="login-form">
           <div className="sign-in-htm">
             <div className="group">
               <label for="user" className="label">Username</label>
               <input id="user" type="text" className="input" />
             </div>
             <div className="group">
               <label for="pass" className="label">Password</label>
               <input id="pass" type="password" className="input" data-type="password" />
             </div>
             <div className="group">
               <input id="check" type="checkbox" className="check" checked />
               <label for="check"><span className="icon"></span> Keep me Signed in</label>
             </div>
             <div className="group">
               <input type="submit" className="button" value="Sign In" />
             </div>
             <div className="hr"></div>
             <div className="foot-lnk">
               <a href="#forgot">Forgot Password?</a>
             </div>
           </div>
           <div className="sign-up-htm">
             <div className="group">
               <label for="user" className="label">Username</label>
               <input onChange={this.getUsername} id="user" type="text" className="input" />
             </div>
             <div className="group">
               <label for="pass" className="label">Password</label>
               <input onChange={this.getPassword} id="pass" type="password" className="input" data-type="password" />
             </div>

             <div className="group">
               <label for="pass" className="label">Email Address</label>
               <input onChange={this.getEmail} id="pass" type="text" className="input" />
             </div>
             <div className="group">
               <button onClick={this.sendUserToServer} className="regButton"><input type="submit" className="button" value="Sign Up" /></button>
               <h3 className="message">{this.state.message}</h3>
             </div>
             <div className="hr"></div>
             <div className="foot-lnk">
               <label for="tab-1">Already Member?</label>
             </div>
           </div>
         </div>
        </div>
      </div>


      </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {

     //this.props.isAuthenticated
    //ctr: state.counter // this.props.ctr
  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter


  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))
