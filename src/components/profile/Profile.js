import React, { Component } from 'react';

class profile extends Component {
  render() {
    const user = this.props.match.params.user;
    return <h1>{user} </h1>;
  }
}

export default profile;
