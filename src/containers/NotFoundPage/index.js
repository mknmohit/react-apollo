import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-root">
      <div className="not-found-container">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      </div>
    </div>
  );
}
