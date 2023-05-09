import "./App.css";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout"
import About from "./views/About/About";
import Contact from "./views/Contact/Contact"
import Projects from "./views/Projects/Projects";
import Resume from "./views/Resume/Resume"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<About />} /> */}

      <Route index element={
        <div>
          <Home/>
          <About />
          <Resume />
          <Projects />
          <Contact />
        </div>
      } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
