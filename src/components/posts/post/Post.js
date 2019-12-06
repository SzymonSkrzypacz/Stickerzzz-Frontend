import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
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
import TextField from '@material-ui/core/TextField';

import Map from '../../map/Map';

import EditPostModal from '../editPostModal/EditPostModal';

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
  const [open, setOpen] = React.useState(false);
  const [openReason, setOpenReason] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAvatarClick = () => {
    console.log('klikniete');
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReasonClick = () => {
    setOpenReason(!openReason);
  };
  // console.log(props);

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
          <IconButton aria-label='delete' onClick={handleClick}>
            <DeleteIcon />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>
                {'Czy na pewno usunąć?'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  Pamiętaj, że zmiany nie da się cofnąć!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary'>
                  Nie
                </Button>
                <Button onClick={handleClose} color='primary' autoFocus>
                  Tak
                </Button>
              </DialogActions>
            </Dialog>
          </IconButton>
        }
        title={name}
        subheader={date}
      />

      <CardMedia className={classes.media} image={image} title='Paella dish' />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {tags.join(' ')}
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

        <IconButton aria-label='report' onClick={handleReasonClick}>
          <ReportIcon />
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
