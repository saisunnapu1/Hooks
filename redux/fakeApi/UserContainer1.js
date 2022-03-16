import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Action";

function UserContainer1() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(data.users[0], "uc1");
  console.log(data.users);
  return (
    <div>
      {/* <button onClick={() => dispatch(fetchUsers)}>Click me</button> */}
      {data.users.map((e) => (
        <p>{e.name}</p>
      ))}
    </div>
  );
}
export default UserContainer1;
