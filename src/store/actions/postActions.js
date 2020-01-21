import apiUrl from '../../config/cfg';
import axios from 'axios';

export const GET_POSTS_REQUESTED = 'GET_POSTS_REQUESTED';
export const GET_POSTS_DONE = 'GET_POSTS_DONE';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const SEND_POST_DONE = 'SEND_POST_DONE';
export const SEND_POST_FAILED = 'SEND_POST_FAILED';
export const SEND_POST_REQUESTED = 'SEND_POST_REQUESTED';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const LIKE_POST = 'LIKE_POST';

export function getPostsRequested() {
  return {
    type: 'GET_POSTS_REQUESTED'
  };
}

export function sendPostRequested() {
  return {
    type: 'GET_POSTS_REQUESTED'
  };
}

export function getPostsDone(data) {
  // console.log(data)
  return {
    type: 'GET_POSTS_DONE',
    payload: data
  };
}

export function getPostsFailed(error) {
  return {
    type: 'GET_POSTS_FAILED',
    payload: error
  };
}

export function addComment(userName, comment, avatar, postId) {
  return {
    type: 'ADD_COMMENT',
    userName, 
    comment, 
    avatar,
    postId
  };
}

export function deletePost(postId) {
  //dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Dodawanie postów aktualnie wyłączone' });
  return dispatch => {
    dispatch({ type: 'DELETE_POST', postId });
    dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Post usunięty!' });
  };
}

export function likePost(postId) {
  //dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Dodawanie postów aktualnie wyłączone' });
  return dispatch => {
    dispatch({ type: 'LIKE_POST', postId });
    dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Zostawiłeś like!' });
  };
}

export function getPosts() {
  return dispatch => {
    // set state to "loading"
    dispatch(getPostsRequested());

    axios.get(`${apiUrl}api/Posts`)
      .then(res => {
        //console.log('data', res.data.posts);
        dispatch(getPostsDone(res.data.posts));
        })
      .catch(error => {
        console.log(error)
        dispatch(getPostsFailed(error));
      })
  }
}

export const sendPost = (data) => {
  // console.log(data)
  return (dispatch, getState) => {
  dispatch(sendPostRequested());
  const date = new Date();
  const dateReq = `${date.getDate()}.${date.getUTCMonth()+1}.${date.getFullYear()}`
  //dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Dodawanie postów aktualnie wyłączone' });
  axios.post(`${apiUrl}api/Posts`, {
      "Post": {
          "Title": data.title,
          "Content": dateReq,
          "StickersData": [
            {
              "Name": data.title,
              "Longitude": Number(data.lon),
              "Latitude": Number(data.lat),
              "Img": data.img,
              "TagList": [
                'tag1', 'tag2'
              ]
            }
          ]
        }
      }
  )
    .then(function (res) {
        dispatch({ type: 'SEND_POST_DONE', res });
        dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Post dodany' });
        dispatch({ type: 'ADD_POST_MODAL_SWITCH', payload: false })
        //console.log(getState());
        return true
    }).catch(function (err) {
        console.log(err.message)
        dispatch({ type: 'SEND_POST_FAILED', err });
        dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Błąd serwera' });
        return false
    });

  }
}