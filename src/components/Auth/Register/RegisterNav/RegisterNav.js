import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SignUpModal from '../SignUpModal/SignUpModal.js';
import { switchRegisterModalOpen, switchRegisterModalClose } from '../../../../store/actions/modalsActions';
import { connect } from 'react-redux';

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

function Register(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);
  

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
   
  //   props.switchRegisterModal();
  //    console.log(props.registerModal)
  // };
  

//console.log(props.registerModal)
  return (
    <div>
      <Button color='inherit' onClick={props.switchRegisterModalOpen} >
        Register
      </Button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={props.registerModal}
        onClose={props.switchRegisterModalClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <SignUpModal close={props.switchRegisterModalClose} />
        </div>
      </Modal>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    switchRegisterModalClose: () => dispatch(switchRegisterModalOpen()), 
    switchRegisterModalOpen: () => dispatch(switchRegisterModalClose()), 
    // switchLoginModal: () => (switchLoginModal())
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    registerModal: state.modals.registerModal,
    // loginModal: state.modals.loginModal,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
