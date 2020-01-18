import React, { Component } from 'react';
import { addComment } from '../../../store/actions/postActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import classes from './Comment.css';
import { connect } from 'react-redux';




class Comment extends Component {
  state = {
    comment: '',
  }
  
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment('prawdziwyPolak1410', this.state.comment, 'https://www.odziezuliczna.pl/!data/shop/b_shop2_440.jpg', this.props.postId)
    this.setState({
      comment: ''
    })
  }
  
  
  render(){
    const { comments } = this.props;
    return (
    <List className={classes.root} >
    {comments.map(comment => {
      return (
        <ListItem key={comment.commentId}>
          <Link to={'user/' + comment.userName}>
            <ListItemAvatar>
              <Avatar src={comment.avatar || 'https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256'} />
            </ListItemAvatar>
          </Link>
            <ListItemText primary={comment.comment} secondary={comment.userName}/>
        </ListItem>
      )
    
    })}
    <ListItem>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={ this.handleSubmit }>
              <TextField onChange={this.handleChange} value={this.state.comment} label='Dodaj komentarz!' variant="outlined" fullWidth/>
            </form>
    </ListItem>
    </List>
  )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (userName, comment, avatar, postId) => dispatch(addComment(userName, comment, avatar, postId)),
  }
}

export default connect(null, mapDispatchToProps)(Comment);