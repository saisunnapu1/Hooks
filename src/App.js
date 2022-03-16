import { Provider } from "react-redux";
import "./styles.css";
import Weather from "./Weather";
import store from "../redux/fakeApi/store";
import UserContainer from "../redux/fakeApi/UserContainer";
import UserContainer1 from "../redux/fakeApi/UserContainer1";

export default function App() {
  return (
    // <div className="container-fluid p-5  text-danger text-center">
    //   haii

    //   <Weather />
    // </div>
    <Provider store={store}>
      {/* <UserContainer /> */}
      <UserContainer1 />
    </Provider>
  );
}
