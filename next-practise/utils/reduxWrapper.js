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
const getIsServer = () => typeof window == "undefined";

const initializeStore = (preloadedState = {}) => createStore(rootReducer);

function wrapper(Component) {
  const displayName = `withRedux(${
    Component.displayName || Component.name || "Component"
  })`;

  const hasInitialProps = "getInitialProps" in Component;

  console.log({ displayName, hasInitialProps });

  class WithRedux extends App {
    constructor(props) {
      super(props);
      this.reduxStore = initializeStore();
    }

    static getInitialProps(ctx) {
      console.log(ctx);

      return {};
    }

    render() {
      console.log(this.props);

      const { initialState, initialProps, ...props } = this.props;

      console.log({ initialProps, initialState });

      let finalProps = {};

      finalProps.pageProps = {
        initialState: this.reduxStore.getState(),
      };

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
