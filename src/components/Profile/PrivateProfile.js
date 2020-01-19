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
import { switchEditProfileModalClose, switchEditProfileModalOpen } from '../../store/actions/modalsActions';
import Modal from '@material-ui/core/Modal';
import EditProfileModal from './EditProfileModal';


class PrivateProfile extends Component {
  
  
  render(){
  const { user, switchEditProfileModalOpen, openModal, switchEditProfileModalClose } = this.props;
  return (
    <div className='width-450'>
      <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={ user.username }
            height="400"
            image={ user.avatar || 'https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256' }
            title={ user.username }
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {'Twoja nazwa użytkownika to: ' + user.username }
            </Typography>

            <>
              <Typography color="textSecondary" component="p">
                {'Twój email to: ' + user.email }
              </Typography>
            </>

            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" onClick={switchEditProfileModalOpen}>
            Edytuj
          </Button>
        </CardActions>
      </Card>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={openModal}
        onClose={switchEditProfileModalClose}>
        <div className={classes.paper}>
          <EditProfileModal close={switchEditProfileModalClose} username={user.username} email={user.email}/>
        </div>
      </Modal>
    </div>
    
  );
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    openModal: state.modals.editProfileModal,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    switchEditProfileModalClose: () => dispatch(switchEditProfileModalClose()),
    switchEditProfileModalOpen: () => dispatch(switchEditProfileModalOpen()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfile);
