import { GET_USERS } from "./Action";
const initialState = {};

const userReducer = (state = initialState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
