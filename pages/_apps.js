import "../styles/styles.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function App({ Component, pageProps }) {
    return (
      <Layout>
        <Hero />
        <Skills />
        {/* <Component {...pageProps} /> */}
      </Layout>
    );
  }