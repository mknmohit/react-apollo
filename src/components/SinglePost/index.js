import React from "react";
import { useQuery } from "@apollo/client";
import { Skeleton } from "antd";
import ScrollToTop from "../../components/ScrollToTop";
import { SINGLE_POST_QUERY } from "./query";
import "./styles.css";

const SinglePost = (props) => {
  const { data, loading } = useQuery(SINGLE_POST_QUERY, {
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

  return (
    <ScrollToTop>
      <section className="single-post-root">{renderCard()}</section>
    </ScrollToTop>
  );
};

export default SinglePost;
