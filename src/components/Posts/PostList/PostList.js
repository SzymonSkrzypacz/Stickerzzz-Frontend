import React, { Component } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import SimpleSnackbar from '../../Snackbar/Snackbar'

class PostList extends Component {
  state = {
    postList: [...this.props.posts],
  };

  render() {
    return this.state.postList.map((postData, key) => {
      return (
        <>
          <Post {...postData} key={key}/>
          <SimpleSnackbar />
        </>
      );

    });
  }
}

const mapStateToProps = state => {
  return { posts: state.posts.posts };
};

export default connect(mapStateToProps)(PostList);
