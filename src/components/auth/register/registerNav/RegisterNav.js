import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Modal from './node_modules/@material-ui/core/Modal';
import Button from './node_modules/@material-ui/core/Button';
import SignUpModal from '../SignUpModal/SignUpModal';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Register() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color='inherit' onClick={handleOpen}>
        Register
      </Button>
      {/* <button type='button' onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <SignUpModal />
        </div>
      </Modal>
    </div>
  );
}
