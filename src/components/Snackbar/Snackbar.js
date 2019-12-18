import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { switchRegisterNotificationClose } from '../../store/actions/modalsActions';
import {  green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
    success: {
    backgroundColor: green[600],
  },
  }),
);

function SimpleSnackbar({ registerNotification, switchRegisterNotificationClose }) {
  const classes = useStyles();
  //console.log(registerNotification)
  return (
    <div>
      <Snackbar
        className={classes.success}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={registerNotification}
        autoHideDuration={2000}
        onClose={switchRegisterNotificationClose}
        ContentProps={{
          'aria-describedby': 'add user notification',
        }}
        message={<span id="message-id">Użytkownik został dodany!</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={switchRegisterNotificationClose}
          >
          
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        registerNotification: state.modals.registerNotification,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchRegisterNotificationClose: () => dispatch(switchRegisterNotificationClose())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar)