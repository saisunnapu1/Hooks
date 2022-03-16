import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./Action";
function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return <h1>jii</h1>;
  // userData.loading ? (
  //   <h2>Loaing</h2>
  // ) : userData.error ? (
  //   <h2>{userData.error}</h2>
  // ) : (
  //   <div>
  //     <h2>User List</h2>
  //     <div>
  //       {userData &&
  //         userData.users &&
  //         userData.users.map((user) => <p>{user.name}</p>)}
  //     </div>
  //   </div>
  // );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
// export default connect(null, mapDispatchToProps)(UserContainer);
