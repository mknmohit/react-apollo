import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Routes from "../../components/Routes";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="background-gray">
      <Routes />
    </div>
    <Footer />
  </div>
);

export default App;
