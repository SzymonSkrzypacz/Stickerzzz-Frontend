import * as actions from '../actions/postActions';

const initState = {
 isLoading: false, 
 isError: false, 
 data: [],
 isSending: false,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_POSTS_REQUESTED:
      return { ...state, isLoading: true };
    case actions.GET_POSTS_DONE:
    //console.log(action.payload);
      return { ...state, isLoading: false, data: action.payload };
    case actions.GET_POSTS_FAILED:
      return { ...state, isLoading: false, isError: true }
      
    case actions.SEND_POST_REQUESTED:
      return { ...state, isSending: true };
    case actions.SEND_POST_DONE:
      const post = action.res.data;
      console.log(post.post)
      return { ...state, isSending: false, data: [...state.data, post.post] };
    case actions.SEND_POST_FAILED:
      return { ...state, isSending: false, isError: true }
    
    default:
      return state;
  }
};

export default postReducer;
