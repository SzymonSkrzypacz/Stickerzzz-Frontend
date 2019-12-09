import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate( -50%, -50%)`,
  };
}

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px',
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function AddPost() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='contained' color='secondary' onClick={handleOpen}>
        Add Post
      </Button>
      <Modal
        disableEnforceFocus
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id='simple-modal-title'>Dodaj nowy post</h2>
        </div>
      </Modal>
    </>
  );
}
