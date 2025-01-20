import "../styles/styles.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact.jsx"

export default function App({ Component, pageProps }) {
    return (
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        {/* <Component {...pageProps} /> */}
      </Layout>
    );
  }