import React, { Component } from 'react';
import {connect} from 'react-redux';


class InformationSurfersContainer extends Component {
  
  state = {
    displaySurfer: false
  }

  renderSurfer = () => {
    if(this.state.displaySurfer)
      return (
        <div>
                {
                     this.props.surfers.map(user => {
                         return(
                           <div>
                            <div className="info">
                              <ul  key={user.id}>
                                  <li>ID: {user.id}</li>
                                  <li>Username: {user.username}</li>
                                  <li> Lastname: {user.lastname}</li>
                                  <li>Age: {user.age}</li>
                                  <li>Gender: {user.gender}</li>
                              </ul>
                            </div>
                            <div className='yesNoBtn'>
                              <button>NO</button>
                              <button>YES</button>
                            </div>

                          </div>


                         )
                     })

                }
                
                
            </div>
      )
    else
        return null
      

  }

  btnHandle = () => {
    this.setState({displaySurfer: !this.state.displaySurfer})
  }


  render() {
   
    return (
      <div className="App">
        <button onClick={this.btnHandle}>Render SURFERS</button>
        {this.renderSurfer()}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surfers: state.users.filter(user => user.isSurfer)
  }
 
}




export default connect(mapStateToProps)(InformationSurfersContainer);