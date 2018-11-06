import React, { Component } from 'react';
import {connect} from 'react-redux';



class InformationHostsContainer extends Component {
  state = {
    displayHost: false
  }

  renderHost = () => {
    if(this.state.displayHost)
      return (
        <div>
                {
                     this.props.hosts.map(user => {
                         return(
                            <ul  key={user.id}>
                                <li>ID: {user.id}</li>
                                <li>Username: {user.username}</li>
                                <li> Lastname: {user.lastname}</li>
                                <li>Age: {user.age}</li>
                                <li>Gender: {user.gender}</li>
                            </ul>

                         )
                     })

                }
            </div>
      )
    else
        return null
        

  }

  btnHandle = () => {
    this.setState({displayHost: !this.state.displayHost})
  }


  render() {
   
    return (
      <div className="App">
        <button onClick={this.btnHandle}>Render HOST</button>
        {this.renderHost()}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hosts: state.users.filter(user => !user.isSurfer)
  }
 
}

export default connect(mapStateToProps)(InformationHostsContainer);