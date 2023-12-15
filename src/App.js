import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Blogcontent from "./pages/blog-content.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogcontent/:id" element={<Blogcontent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
