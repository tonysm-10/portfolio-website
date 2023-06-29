import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About/index'
import Projects from './components/Projects'
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;


