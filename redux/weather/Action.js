export const GET_USERS = "GET_USERS";
const getAction = (users) => {
  console.log(users);
  return {
    type: GET_USERS,
    payload: users
  };
};
// export const fetchApi= async ()=>{
//    await axios.get("http://localhost:8080/api/users")
//     .then((res)=>{getAction(res.data)})
//     console.log("fetchapu")

// }
export default getAction;
