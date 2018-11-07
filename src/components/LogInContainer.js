import React, { Component } from 'react';
import { connect } from 'react-redux';




class LogInContainer extends Component {
  state = {}



handleSubmit = () => {
        
    for (let i = 0; i < this.props.users.length; i++){
        if ((this.props.users[i].username === this.state.username) && (this.props.users[i].password === this.state.password)) {
          alert("User Found !!!")
        } else {
          alert("User not Found")
        }
    }
}

handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
}
      
 


render() {
  return (
    <div>
      <h2>Log In</h2>

      <form onSubmit={this.handleSubmit}>
        
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>

        <label>
          Password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
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