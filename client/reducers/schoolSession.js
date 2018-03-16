import { ADD_SCHOOL_SESSION, DELETE_SCHOOL_SESSION, UPDATE_SCHOOL_SESSION, UPDATE_SCHOOL_SESSION_INDEX } from '../actions/types';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_SCHOOL_SESSION:
      const index = findIndex(state, { id: action.post.id });
      if (index >= 0) {
        state.splice(index, 1);
      };
      return [
        ...state,
        action.post
      ];
      case UPDATE_SCHOOL_SESSION:
        action.post.indexId = 0;
        const postIndex = findIndex(state, { id: action.post.id });
        if (postIndex >= 0) {
          action.post.indexId = state[postIndex].indexId
          state.splice(postIndex, 1);
        }
        return [
          ...state,
          action.post
        ];
      case UPDATE_SCHOOL_SESSION_INDEX:
        state.map(function (post,i) {
          if (post) {
            if(action.id != post.id) {
              post.indexId = post.indexId +1;
            }
          }
        });
        return state;
      case DELETE_SCHOOL_SESSION:
        return state.filter(post => (post.id !== action.post.id));
    default: return state;
  }
}
