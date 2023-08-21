import "../styles/styles.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function App({ Component, pageProps }) {
    return (
      <Layout>
        <Hero />
        {/* <Component {...pageProps} /> */}
      </Layout>
    );
  }