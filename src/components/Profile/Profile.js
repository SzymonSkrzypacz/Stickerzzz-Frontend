import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: '50px auto',
  },
});

function Profile(props) {
  const classes = useStyles();
  //console.log(props)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.user.username}
          height="400"
          image={props.user.avatar || 'https://www.comarch-cloud.com/profile/v1/avatar/01do4e1vtc/256'}
          title={props.user.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.username}
          </Typography>
          {props.admin && (
          <>
            <Typography variant="body3" color="textSecondary" component="p">
              {props.user.email}
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
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,  
    admin: state.auth.admin,  
  }
}

export default connect(mapStateToProps)(Profile);
