import "./App.css";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout"
import About from "./views/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
