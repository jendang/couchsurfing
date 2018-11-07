import React, { Component } from 'react';
import {connect} from 'react-redux'


class Match extends Component {

  yesClick = () => {
    this.props.users[0].matchedId.push(this.props.users[1].id)
    console.log(this.props.users[0])  
    this.createMessage() 
    alert("congrats")

  }

  createMessage = () => {
    if ((this.props.users[0].matchedId = [this.props.users[1].id]) && (this.props.users[1].matchedId = [this.props.users[0].id])) {
            this.props.users[1].messages.push("You have matched with " + this.props.users[0].username)
            this.props.users[0].messages.push("You have matched with " + this.props.users[1].username) 
        }
    console.log(this.props.users[1])
  }

  noClick = () => {
    alert ("Bummer")
    //Bring other user's profile!
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.yesClick}>YES</button>
        <button onClick = {this.noClick}>NO</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Match);
