import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Result, Skeleton } from "antd";
import ScrollToTop from "../../components/ScrollToTop";
import { SINGLE_POST_QUERY } from "./query";
import "./styles.css";

const SinglePost = (props) => {
  const { data, loading, error } = useQuery(SINGLE_POST_QUERY, {
    variables: { postId: props.match.params?.postId },
  });

  const renderCard = () => {
    if (loading) {
      return (
        <div className="single-post">
          <Skeleton active />
        </div>
      );
    }
    if (data) {
      return (
        <div className="single-post capitalize">
          <p className="post-title">{data.getSinglePost?.title}</p>
          <p className="post-description">{data.getSinglePost?.description}</p>
        </div>
      );
    }
  };

  const renderErrorMessage = () => {
    console.log("error: ", error);
    if (error) {
      return (
        <Result
          status="error"
          title={`${error}`}
          subTitle="Please check the post id or go back to home page and open the required post."
          extra={[
            <Link to="/" key="home">
              <Button type="primary">Back To Home</Button>
            </Link>,
          ]}
        />
      );
    }
  };

  return (
    <ScrollToTop>
      <section className="single-post-root">
        {renderErrorMessage()}
        {renderCard()}
      </section>
    </ScrollToTop>
  );
};

export default SinglePost;
