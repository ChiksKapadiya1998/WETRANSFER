import {POST_DATA, POST_LIST_DATA, USER_DATA} from '../actions/types';

const INITIAL_STATE = {
  allUserData: {},
  allPostData: {},
  postData: {},
};

export default (state = INITIAL_STATE, action: any) => {
  console.log('AAAAAA', action.type);
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        allUserData: action?.payload,
      };
    case POST_LIST_DATA:
      return {
        ...state,
        allPostData: action?.payload,
      };
    case POST_DATA:
      return {
        ...state,
        postData: action?.payload,
      };
    default:
      return state;
  }
};
