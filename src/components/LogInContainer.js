import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './styles/LogInContainer.css';





class LogInContainer extends Component {
  state = {}


handleSubmit = () => {
  const userFound =  this.props.users.filter(
      curUser => curUser.username === this.state.username && curUser.password === this.state.password)
  
    if (userFound.length < 1 ){
      return alert("User not Found !!!")
    }else {        
      return alert("User Found")}
    }

handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
}
 
render() {
  return (
    <div id="body">

      <form onSubmit={this.handleSubmit}>
        
        <label>
          
          <Link to= {'/users'}><input id="submitbox" type="submit" value="Sign In"></input></Link>

          <input className="textbox" placeholder = "Password" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>

        <label>
          <input className="textbox" placeholder = "Username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          
        </label>
      </form>

      <img className ="HomeImage" alt="logo" src="images/download.jpg"></img>
      

      <h1>Welcome to Couchaisseur </h1>
      <span><h1>Amsterdam</h1></span>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
    return {
      users: state.users
    }
   
}
  
  
  
  
export default connect(mapStateToProps)(LogInContainer);
