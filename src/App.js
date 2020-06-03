import React from "react";
// import logo from './logo.svg';
import Portfolio from "./components/Portfolio";
import "./App.css";
import Navbar from "./components/common-components/navbar";
import Header from "./components/common-components/header";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/common-components/Footer";

function App() {
  const portfolioLinks = [
    {
      title: "Threads",
      caption: "Illustration",
    },
    {
      title: "Explore",
      caption: "Graphic Design",
    },
    {
      title: "Finish",
      caption: "Identity",
    },
    {
      title: "Lines",
      caption: "Branding",
    },
    {
      title: "Southwest",
      caption: "Website Design",
    },
    {
      title: "Window",
      caption: "Photography",
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
      <About></About>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
