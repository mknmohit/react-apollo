import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Routes from "../../components/Routes";
import "./styles.css";

const App = () => (
  <div className="app">
    <Header />
    <div className="background-gray">
      <Routes />
    </div>
    <Footer />
  </div>
);

export default App;
