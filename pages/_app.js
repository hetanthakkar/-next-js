import "../styles/globals.css";
// import Navbar from "../Layout/index";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
