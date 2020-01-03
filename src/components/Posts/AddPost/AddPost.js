import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddPostModal from './AddPostModal.js';
import { connect } from 'react-redux';
import { switchAddPostModalClose, switchAddPostModalOpen } from '../../../store/actions/modalsActions';

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

function AddPost(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
    return (
        <>
            <Button variant='contained' color='secondary' onClick={props.switchAddPostModalOpen}>
              Add Post
            </Button>
            <Modal
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
                open={props.openModal}
                onClose={props.switchAddPostModalClose}>
                <div style={modalStyle} className={classes.paper}>
                <AddPostModal close={props.switchAddPostModalClose} />
                </div>
            </Modal>
        </>
    
);
 }   


const mapStateToProps = state => {
  return {
    openModal: state.modals.addPostModal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchAddPostModalClose: () => dispatch(switchAddPostModalClose()),
    switchAddPostModalOpen: () => dispatch(switchAddPostModalOpen()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
