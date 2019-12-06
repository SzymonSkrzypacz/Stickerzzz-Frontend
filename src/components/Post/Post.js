import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';

import Map from '../Map/Map';

import EditPostModal from '../EditPostModal/EditPostModal';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    margin: '20px auto',
    border: 'none',
    boxShadowColor: '#3F51B5',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAvatarClick = () => {
    console.log('klikniete');
  };
  console.log(props);

  const { avatar, name, date, image, tags, likes, position, shares } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            className={classes.avatar}
            src={avatar}
            onClick={handleAvatarClick}
          />
        }
        action={
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />

      <CardMedia className={classes.media} image={image} title='Paella dish' />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {[...tags]}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='like'>
          <ThumbUpAltIcon />
        </IconButton>
        <Typography variant='body2' color='textSecondary' component='p'>
          {likes}
        </Typography>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Typography variant='body2' color='textSecondary' component='p'>
          {shares}
        </Typography>
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

        <IconButton aria-label='report'>
          <ReportIcon />
        </IconButton>
        <EditPostModal />
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Map position={position} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
