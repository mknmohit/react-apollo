import React from "react";
import { PlusOutlined } from "@ant-design/icons";

import "./styles.css";

const Homepage = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span>React</span>
        <span>{<PlusOutlined className="spin-icon" spin/>}</span>
        <span>Apollo</span>
      </div>
    </section>
  );
};

export default Homepage;
