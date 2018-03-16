import axios from 'axios';
import { API_BASE_URL, ADD_SCHOOL, DELETE_SCHOOL, UPDATE_SCHOOL, UPDATE_SCHOOL_INDEX } from './types';

export function storeAdd(post) {
  return {
    type: ADD_SCHOOL,
    post
  };
}
export function storeUpdateIndex(id) {
  return {
    type: UPDATE_SCHOOL_INDEX,
    id
  };
}

export function storeUpdate(post) {
  return {
    type: UPDATE_SCHOOL,
    post
  };
}
export function storeDelete(id) {
  return {
    type: DELETE_SCHOOL,
    id
  };
}

/***************************************************************************/

export function Count() {
  return dispatch => {
    return axios.get(API_BASE_URL+'/school/count');
  }
}
export function getAllGroups() {
    return axios.get(API_BASE_URL+'/group?limit=-1');
}
export function CreatePost(data) {
  return dispatch => {
    return axios.post(API_BASE_URL+'/school', data);
  }
}
export function getPost(id) {
  return dispatch => {
    return axios.get(API_BASE_URL+'/school/'+id);
  }
}
export function PostStoreUpdate(data) {
  return dispatch => storeUpdate(data);
}
export function UpdatePost(data) {
  const id = data.id;
  return dispatch => {
    return axios.put(API_BASE_URL+'/school/'+id, data);
  }
}

export function PostList(skip, limit) {
	limit = (limit) ? limit : 10
	skip = (skip) ? skip : 0

  return dispatch => {
	return axios.get(API_BASE_URL+`/school?sort=createdAt DESC&skip=${skip}&limit=${limit}`)
				  .then(res => {
            // console.log(res);
				  	if (typeof res == 'object') {
				  		res.data.map((post, i) => {
                var newSchool = {};
				  			newSchool.indexId = skip + i;
				  			newSchool.id = post.id;
				  			newSchool.school_name = post.school_name;
				  			newSchool.education_board = post.education_board;
				  			newSchool.school_established = post.school_established;
				  			newSchool.registration_no = post.registration_no;
				  			newSchool.email_id = post.email_id;
				  			newSchool.phone_number = post.phone_number;
					  		dispatch(storeAdd(newSchool));
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
      var newSchool = {};
      newSchool.indexId = 0;
      newSchool.id = newPost.id;
      newSchool.school_name = newPost.school_name;
      newSchool.education_board = newPost.education_board;
      newSchool.school_established = newPost.school_established;
      newSchool.registration_no = newPost.registration_no;
      newSchool.email_id = newPost.email_id;
      newSchool.phone_number = newPost.phone_number;
    dispatch(storeAdd(newSchool));
  }
}
