import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/index/header";
import Hero from "./components/index/hero";
import Software from "./components/index/softwares";
import Features from "./components/index/features";
import Testimonials from "./components/index/testimonials";
import Services from "./components/index/services";
import Footer from "./components/index/footer";
import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
function App() {
  useEffect(() => {
    setTimeout(function () {
      var loader = document.getElementById("loader");
      loader.style.opacity = 0;
      setTimeout(function () {
        loader.style.display = "none";
      }, 500);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <div
        className="absolute opacity-100 top-0 left-0 flex justify-center items-center w-screen h-screen bg-blue-50 z-50 transition-opacity duration-500"
        id="loader"
      >
        <InfinitySpin
          visible={true}
          width="200"
          color="#3CA9FD"
          ariaLabel="infinity-spin-loading"
        />
      </div>
      <Navbar />
      <Hero />
      <Software />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
