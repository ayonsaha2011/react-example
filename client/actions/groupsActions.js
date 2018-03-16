import axios from 'axios';
import { API_BASE_URL, ADD_GROUP, DELETE_GROUP, UPDATE_GROUP, UPDATE_GROUP_INDEX } from './types';

export function storeAdd(post) {
  return {
    type: ADD_GROUP,
    post
  };
}
export function storeUpdateIndex(id) {
  return {
    type: UPDATE_GROUP_INDEX,
    id
  };
}

export function storeUpdate(post) {
  return {
    type: UPDATE_GROUP,
    post
  };
}
export function storeDelete(id) {
  return {
    type: DELETE_GROUP,
    id
  };
}

/***************************************************************************/

export function Count() {
  return dispatch => {
    return axios.get(API_BASE_URL+'/group/count');
  }
}
export function CreatePost(data) {
  return dispatch => {
    return axios.post(API_BASE_URL+'/group', data);
  }
}
export function getPost(id) {
  return dispatch => {
    return axios.get(API_BASE_URL+'/group/'+id);
  }
}
export function PostStoreUpdate(data) {
  return dispatch => storeUpdate(data);
}
export function UpdatePost(data) {
  const id = data.id;
  return dispatch => {
    return axios.put(API_BASE_URL+'/group/'+id, data);
  }
}

export function PostList(skip, limit) {
	limit = (limit) ? limit : 10
	skip = (skip) ? skip : 0

  return dispatch => {
	return axios.get(API_BASE_URL+`/group?sort=createdAt DESC&skip=${skip}&limit=${limit}`)
				  .then(res => {
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
    dispatch(storeAdd(newPost));
  }
}
