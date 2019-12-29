import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import store from "./store";

const DisplayProfile = () => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_USER_DATA",
      payload: {
        userName: "praveen-me"
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {userData && (
        <>
          <img src={userData.avatar_url} alt="" />
          <p>{userData.login}</p>
          <p>{userData.name}</p>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <DisplayProfile />
    </Provider>
  );
}

export default App;
