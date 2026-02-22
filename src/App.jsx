import "./App.css";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Projects from "./views/Projects/Projects";
import Resume from "./views/Resume/Resume";
import Privacy from "./views/Privacy/Privacy";
import WordyPuffPrivacy from "./views/Privacy/WordyPuffPrivacy";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<About />} /> */}

            <Route
              index
              element={
                <div>
                  <Home />
                  <About />
                  <Resume />
                  <Projects />
                  <Contact />
                </div>
              }
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/wordypuff-privacy" element={<WordyPuffPrivacy />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
