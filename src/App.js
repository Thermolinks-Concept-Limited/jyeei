import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import About from "./Pages/AboutPage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Landing />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
