import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import Button from '@material-ui/core/Button';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
// import TextField from '@material-ui/core/TextField';
// import List from '@material-ui/core/List';
import Comment from './Comment';
import { deletePost, likePost } from '../../../store/actions/postActions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Map from '../../Map/Map';

// import EditPostModal from '../EditPostModal/EditPostModal';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    margin: '20px auto',
    border: 'none',
    boxShadowColor: '#3F51B5',
    height: '100%',
  },
  media: {
    height: '100%',
    width: '100%',
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    cursor: 'pointer',
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));

function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  // const [openReason, setOpenReason] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // const handleClose = (bool) => {
  //   if(bool) {
  //     deletePost(id);
  //     handleClick();
  //   } else setOpen(false);
  // };

  // const handleReasonClick = () => {
  //   setOpenReason(!openReason);
  // };
  // //console.log(props);
  
  // const checkIsAuthorOrAdmin = () => {
  //   //console.log(props);
  //   if(props.admin !== null) return true;
  //   else if (props.user !== null && props.user.token === props.creatorId) return true;
  //   else return false;
  // }
  //console.log(props)
  // const author = checkIsAuthorOrAdmin();
  const { userName, avatar, title, content, img, favorited, position, comments, id, stickers, deletePost, admin, likePost } = props;
  

  
  const link = '/user/' + userName;
 //console.log(stickers)
  const postLink = '/post/' + id;
  const defaultPosition = [
    [51.220152, 16.161984]
  ];
  let date;
  // console.log(content)
  if(content instanceof Date ) date = `${content.getDay()}.${content.getUTCMonth()}.${content.getFullYear()}`

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Link className={classes.navLinks} to={link}>
            <Avatar
              aria-label='recipe'
              className={classes.avatar}
              src={avatar || 'https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256'}
              // onClick={handleAvatarClick}
            />
          </Link>
        }
        
        action={ admin && (
          <Button>
          <DeleteIcon onClick={() => deletePost(id)}/>
          </Button>
            )
        }
        
        
        title={title}
        subheader={date || content}
      />
      
      <Link to={postLink} >
        <CardMedia className={classes.media} image={ img ? img : (stickers !== undefined && stickers.length > 0 ? (stickers[0].img) : ('https://www.pandastickers.com/wp-content/uploads/Angry-Panda-Sticker.png'))} title={title} />
      </Link>
      {/* <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {tags.join(' ')}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label='like' onClick={() => likePost(id)}>
          <ThumbUpAltIcon />
        </IconButton>
        <Typography variant='body2' color='textSecondary' component='p'>
          {favorited}
        </Typography>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        {/* <Typography variant='body2' color='textSecondary' component='p'>
          {shares}
        </Typography> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='location'
        >
          <LocationOnIcon />
        </IconButton>

        {/* <IconButton aria-label='report' onClick={handleReasonClick}>
          <ReportIcon />
          <List className={classes.root}>
          
          </List>
          <Dialog
            open={openReason}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
          >
            <DialogTitle id='form-dialog-title'>Zgłoś post!</DialogTitle>
            <DialogContent>
              <DialogContentText>Jaki jest powód zgłoszenia?</DialogContentText>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Reason'
                type='text'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Anuluj
              </Button>
              <Button onClick={handleClose} color='primary'>
                Zgloś
              </Button>
            </DialogActions>
          </Dialog>
        </IconButton>
        { author && <EditPostModal />} */}
        
      </CardActions>
      <Collapse in={expanded} contentout='auto' unmountOnExit>
        <CardContent>
          <Map position={position || defaultPosition } width='470px' height='470px'/>
        </CardContent>
      </Collapse>
      <Comment comments={comments} id={id}/>
    </Card>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
    likePost: postId => dispatch(likePost(postId))
  }
}

const mapStateToProps = state => {
  return {
    admin: state.auth.admin,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)