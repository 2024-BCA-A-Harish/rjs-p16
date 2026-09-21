import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contacts";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>My React Website</h1>
        <Navigation />
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