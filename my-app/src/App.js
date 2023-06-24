import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About/index'
import Projects from './components/Projects'
import Contact from "./components/Contact";
  // "homepage": "https://tonysm-10.github.io/portfolio-website",

function App() {
  return (
    <>
    <Routes>
      <Route path="/portfolio-website" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio-website/about" element={<About />} />
        <Route path="/portfolio-website/projects" element={<Projects />} />
        <Route path="/portfolio-website/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

