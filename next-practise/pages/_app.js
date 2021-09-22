import "../styles/globals.css";
import reduxWrapper from "../utils/reduxWrapper";

function MyApp(props) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default reduxWrapper.wrapper(MyApp);
