import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
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
    if (data) {
      return (
        <div className="single-post">
          <p>{data.getSinglePost?.title}</p>
          <p>{data.getSinglePost?.description}</p>
        </div>
      );
    }
  };

  return <section className="posts">{renderCard()}</section>;
};

export default SinglePost;
