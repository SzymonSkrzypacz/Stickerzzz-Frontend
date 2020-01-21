import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './Profile.css';
import Post from '../Posts/Post/Post';



class Profile extends Component {
  
  
  checkCanEdit = () => {
    if(this.props.admin !== null) return true;
    else if (this.props.user !== null && this.props.user.token === this.props.match.params.user) return true;
    else return false;
  }
  
  
  
  
  render(){
    const { user, posts } = this.props;
    const canEdit = this.checkCanEdit();
    console.log(user)
  return (
    <div className='width-450'>
      <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={ user[0].userName }
            height="400"
            image={ user[0].avatar || 'https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256' }
            title={ user[0].userName }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { user[0].userName }
            </Typography>
            {canEdit && (
            <>
              <Typography color="textSecondary" component="p">
                { user[0].email }
              </Typography>
            </>
            )}
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Zablokuj
          </Button>
          <Button size="small" color="primary">
            Dodaj do znajomych
          </Button>
        </CardActions>
      </Card>
      { posts.map((postData) => <Post {...postData} admin={this.props.admin} key={postData.postId}/>) }
    </div>
    
  );
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.users.users.filter(user => {
      if(user.userName === window.location.href.slice((window.location.href.indexOf('user') + 5))){
        return user
      } else return null;
      }),  
    admin: state.auth.admin,  
    posts: state.posts.data.filter(post => post.userName === window.location.href.slice((window.location.href.indexOf('user') + 5)))
  }
}

export default connect(mapStateToProps)(Profile);
