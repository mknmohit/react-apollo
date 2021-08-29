import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { Skeleton } from 'antd';
import { LINKS_PER_PAGE } from "../../constants";
// import Link from '../../components/Link';
import { Link } from "react-router-dom";
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
      )
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
    <section className="single-post-root">{renderCard()}</section>
  );
};

export default SinglePost;
