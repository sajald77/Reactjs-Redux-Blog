import {combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import CommentReducer from './reducer_comments';

const rootReducer = combineReducers({

    posts: PostReducer,
    comments: CommentReducer
    
  });
  
  export default rootReducer;