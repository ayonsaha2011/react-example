import { ADD_SCHOOL, DELETE_SCHOOL, UPDATE_SCHOOL, UPDATE_SCHOOL_INDEX } from '../actions/types';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_SCHOOL:
      const index = findIndex(state, { id: action.post.id });
      if (index >= 0) {
        state.splice(index, 1);
      };
      return [
        ...state,
        action.post
      ];
      case UPDATE_SCHOOL:
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
      case UPDATE_SCHOOL_INDEX:
        state.map(function (post,i) {
          if (post) {
            if(action.id != post.id) {
              post.indexId = post.indexId +1;
            }
          }
        });
        return state;
      case DELETE_SCHOOL:
        return state.filter(post => (post.id !== action.post.id));
    default: return state;
  }
}
