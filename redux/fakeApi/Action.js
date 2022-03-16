import axios from "axios";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserRequest = () => {
  console.log("requesting..");
  return {
    type: FETCH_USER_REQUEST
  };
};
export const fetchUserSucess = (users) => {
  console.log(users);
  return {
    type: FETCH_USER_SUCESS,

    payload: users
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_REQUEST,
    payload: error
  };
};
export const fetchUsers = () => {
  console.log("i m clicked");
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSucess(users));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
