import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCESS
} from "./Action";

const initialState = {
  loading: false,
  users: [],
  error: ""
};
const reducer = (state = initialState, action) => {
  console.log(action.type, state, action.payload);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        error: action.payload,
        users: [],
        loading: false
      };
    default:
      return state;
  }
};
console.log("after reducer");
export default reducer;
