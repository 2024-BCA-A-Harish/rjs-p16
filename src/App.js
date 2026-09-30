import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contacts";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/rjs-p16">
      <header>
        <h1>My React Website</h1>

        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/aboutus">About Us</Link>{" "}
          <Link to="/contactus">Contact Us</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
