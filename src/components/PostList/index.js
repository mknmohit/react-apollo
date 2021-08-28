import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { LINKS_PER_PAGE } from "../../constants";
// import Link from '../../components/Link';
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./styles.css";

const { Meta } = Card;

const PostList = () => {
  const data = [
    {
      id: 1,
      title: "title 1",
      description: "description 1",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
    },
  ];

  const renderCard = () => {
    return data.map((item) => {
      return (
        <Link to={`/posts/${item.id}`}>
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
