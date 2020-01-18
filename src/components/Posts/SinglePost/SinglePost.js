import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';

const SinglePost = (props) => {
  
  //console.log(props.post[0]);
  return ( 
    <Post {...props.post[0]}/>
   );
}

const mapStateToProps = (state, props) => {
  
  return {
    post: state.posts.data.filter(post => {
      return (
        post.postId === Number(props.match.params.id)
      )
    }),
  }
  }

export default connect(mapStateToProps)(SinglePost);