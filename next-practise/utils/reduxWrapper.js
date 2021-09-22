import React, { useRef } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "next/app";

const initialState = {
  count: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initializeStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState);

function wrapper(Component) {
  // function WithRedux(appProps) {
  //   const store = useRef(initializeStore());
  //   return (
  //   );
  // }

  class WithRedux extends App {
    constructor(props) {
      super(props);
      this.reduxStore = initializeStore();
    }

    render() {
      return (
        <Provider store={this.reduxStore}>
          <Component {...this.props} />;
        </Provider>
      );
    }
  }

  return WithRedux;
}

const reduxWrapper = {
  wrapper,
};

export default reduxWrapper;
