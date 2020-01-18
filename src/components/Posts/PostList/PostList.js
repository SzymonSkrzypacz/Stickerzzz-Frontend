import React, { Component } from 'react';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import { getPosts } from '../../../store/actions/postActions';

class PostList extends Component {
  state = {
    postList: [...this.props.posts],
    user: this.props.user
  };
  
  componentDidMount() {
    if(this.props.loaded === false) this.props.getPosts();
  }

  render() {
    const posts = this.props.posts.map((postData) => <Post {...postData} admin={this.props.admin} user={this.state.user}  key={postData.id}/>)
    return  ( 
      <>
        {posts}
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
    loaded: state.posts.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
