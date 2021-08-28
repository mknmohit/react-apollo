import React from "react";
import { Link } from "react-router-dom";
import { InstagramOutlined, RedditOutlined, SkypeOutlined} from "@ant-design/icons";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="copyright">Copyright &copy; {new Date().getFullYear()} all rights reserved</span>
        <span>
          <Link to="/#"><InstagramOutlined className="social-icons" style={{ fontSize: '18px' }}/></Link>
          <Link to="/#"><RedditOutlined className="social-icons" style={{ fontSize: '18px' }}/></Link>
          <Link to="/#"><SkypeOutlined className="social-icons" style={{ fontSize: '18px' }}/></Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
