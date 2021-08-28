import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button, PageHeader } from "antd";
import { HomeOutlined, FormOutlined } from "@ant-design/icons";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <PageHeader
        className="site-page-header"
        title={<Link to="/">Mohit</Link>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        extra={[
          <Link to="/">
            <Button key="1" icon={<HomeOutlined />}>
              Home
            </Button>
          </Link>,
          <Link to="/create">
            <Button key="2" icon={<FormOutlined />}>
              Create a Post
            </Button>
          </Link>,
        ]}
      />
    </header>
  );
};

export default Header;
