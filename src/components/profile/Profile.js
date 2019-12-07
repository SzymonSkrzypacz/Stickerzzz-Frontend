import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const user = this.props.match.params.user;
    return <h1>{user}</h1>;
  }
}

export default Profile;
