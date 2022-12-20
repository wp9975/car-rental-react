import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Faq from "./components/intro/Faq";
import Hero from "./components/intro/Hero";
import Info from "./components/intro/Info";
import Offer from "./components/intro/Offer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/info" component={<Info/>} />
          <Route path="/offer" component={<Offer/>} />
          <Route path="/faq" component={<Faq/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
