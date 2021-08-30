import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import PostList from "../../components/PostList";
import "./styles.css";

const Homepage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span>React</span>
          <span>{<PlusOutlined className="spin-icon" spin />}</span>
          <span>Apollo</span>
        </div>
      </section>
      <section className="blogs-section">
        <div className="section-heading">
          <p className="heading-label">Blog Posts</p>
        </div>
        <PostList />
      </section>
    </div>
  );
};

export default Homepage;
