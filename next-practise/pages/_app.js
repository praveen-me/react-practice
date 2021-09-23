import "../styles/globals.css";
import reduxWrapper from "../utils/reduxWrapper";

function MyApp(props) {
  const { Component, pageProps } = props;
  console.log({ pageProps });
  return <Component {...props} {...pageProps} />;
}

MyApp.getInitialProps = () => {
  return { testProp: "A props" };
};

export default reduxWrapper.wrapper(MyApp);
