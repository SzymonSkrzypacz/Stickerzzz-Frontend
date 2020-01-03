import React, { Component } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import SimpleSnackbar from '../../Snackbar/Snackbar'

class PostList extends Component {
  state = {
    postList: [...this.props.posts],
    user: this.props.user
  };

  render() {
    const posts = this.props.posts.map((postData) => <Post {...postData} admin={this.props.admin} user={this.state.user}  key={postData.id}/>)
    
    return  ( 
      <>
        {posts}
        <SimpleSnackbar />
      </>
    )
  }
}

const mapStateToProps = state => {
  //console.log(state.posts.data);
  return { 
    posts: state.posts.data,
    user: state.auth.user,
    admin: state.auth.admin,
  };
};

export default connect(mapStateToProps)(PostList);
