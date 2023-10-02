import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";
import Header from "./components/header/Header";
import Experience from "./components/experience/Experience";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <Experience />
      <Certification />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
