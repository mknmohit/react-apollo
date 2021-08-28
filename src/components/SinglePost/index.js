import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { LINKS_PER_PAGE } from "../../constants";
// import Link from '../../components/Link';
import { Link } from "react-router-dom";
import "./styles.css";

const SinglePost = () => {
  const data = {
    id: 1,
    title: "title 1",
    description: "description 1",
  };

  const renderCard = () => {
      return (
          <div className="single-post">
            <span>{data.title}</span>
            <span>{data.description}</span>
          </div>
      );
  };

  return <section className="posts">{renderCard()}</section>;
};

export default SinglePost;
