import axios from 'axios';
import { API_BASE_URL, ADD_EDUCATION_BOARD, DELETE_EDUCATION_BOARD, UPDATE_EDUCATION_BOARD, UPDATE_EDUCATION_BOARD_INDEX } from './types';

export function storeAdd(post) {
  return {
    type: ADD_EDUCATION_BOARD,
    post
  };
}
export function storeUpdateIndex(id) {
  return {
    type: UPDATE_EDUCATION_BOARD_INDEX,
    id
  };
}

export function storeUpdate(post) {
  return {
    type: UPDATE_EDUCATION_BOARD,
    post
  };
}
export function storeDelete(id) {
  return {
    type: DELETE_EDUCATION_BOARD,
    id
  };
}

/***************************************************************************/

export function Count() {
  return dispatch => {
    return axios.get(API_BASE_URL+'/educationBoard/count');
  }
}
export function CreatePost(data) {
  return dispatch => {
    return axios.post(API_BASE_URL+'/educationBoard', data);
  }
}
export function getPost(id) {
  return dispatch => {
    return axios.get(API_BASE_URL+'/educationBoard/'+id);
  }
}
export function PostStoreUpdate(data) {
  return dispatch => storeUpdate(data);
}
export function UpdatePost(data) {
  const id = data.id;
  return dispatch => {
    return axios.put(API_BASE_URL+'/educationBoard/'+id, data);
  }
}

export function PostList(skip, limit) {
	limit = (limit) ? limit : 10
	skip = (skip) ? skip : 0

  return dispatch => {
	return axios.get(API_BASE_URL+`/educationBoard?sort=createdAt DESC&skip=${skip}&limit=${limit}`)
				  .then(res => {
            // console.log(res);
				  	if (typeof res == 'object') {
				  		res.data.map((post, i) => {
				  			post.indexId = skip + i;
					  		dispatch(storeAdd(post));
					  	});
				  	}

				  })
				  .catch(error => {
				    console.log(error.response);
				  });
  }
}

export function deletePost(id) {
    return dispatch => {
      dispatch(storeDelete(id));
      dispatch(storeUpdateIndex(0));
    }
}

export function newPost(newPost) {
  return dispatch => {
    dispatch(storeUpdateIndex(newPost.id));
      newPost.indexId = 0;
    dispatch(storeAdd(newPost));
  }
}
