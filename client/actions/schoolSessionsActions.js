import axios from 'axios';
import { API_BASE_URL, ADD_SCHOOL_SESSION, DELETE_SCHOOL_SESSION, UPDATE_SCHOOL_SESSION, UPDATE_SCHOOL_SESSION_INDEX } from './types';

export function storeAdd(post) {
  return {
    type: ADD_SCHOOL_SESSION,
    post
  };
}
export function storeUpdateIndex(id) {
  return {
    type: UPDATE_SCHOOL_SESSION_INDEX,
    id
  };
}

export function storeUpdate(post) {
  return {
    type: UPDATE_SCHOOL_SESSION,
    post
  };
}
export function storeDelete(id) {
  return {
    type: DELETE_SCHOOL_SESSION,
    id
  };
}

/***************************************************************************/

export function Count() {
  return dispatch => {
    return axios.get(API_BASE_URL+'/schoolSession/count');
  }
}
export function CreatePost(data) {
  return dispatch => {
    return axios.post(API_BASE_URL+'/schoolSession', data);
  }
}
export function getPost(id) {
  return dispatch => {
    return axios.get(API_BASE_URL+'/schoolSession/'+id);
  }
}
export function PostStoreUpdate(data) {
  return dispatch => storeUpdate(data);
}
export function UpdatePost(data) {
  const id = data.id;
  return dispatch => {
    return axios.put(API_BASE_URL+'/schoolSession/'+id, data);
  }
}

export function PostList(skip, limit) {
	limit = (limit) ? limit : 10
	skip = (skip) ? skip : 0

  return dispatch => {
	return axios.get(API_BASE_URL+`/schoolSession?sort=current_session DESC&skip=${skip}&limit=${limit}`)
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
