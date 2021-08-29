import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { LINKS_PER_PAGE } from "../../constants";
// import Link from '../../components/Link';
import { Link } from "react-router-dom";
import { Card } from "antd";
import { POST_QUERY } from "./query";
import "./styles.css";

const { Meta } = Card;

const PostList = () => {
  const { data, loading, error } = useQuery(POST_QUERY);

  const renderCard = () => {
    return data?.getAllPosts?.map((item) => {
      return (
        <Link to={`/posts/${item.id}`} key={item.id}>
          <Card
            hoverable
            style={{ minWidth: 320, maxWidth: 768, marginBottom: 16 }}
            className="card"
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        </Link>
      );
    });
  };

  return <section className="posts">{renderCard()}</section>;
};

export default PostList;
