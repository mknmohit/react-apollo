import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { LINKS_PER_PAGE } from "../../constants";
// import Link from '../../components/Link';
import { Link } from "react-router-dom";
import { Card, Skeleton } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { POSTS_QUERY } from "./query";
import "./styles.css";

const { Meta } = Card;

const PostList = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY);

  const renderCard = () => {
    if (loading) {
      return (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      )
    }
    return data?.getAllPosts?.map((item) => {
      return (
        <Link to={`/posts/${item.id}`} key={item.id} className="card-container">
          <Card
            hoverable
            style={{ minWidth: 320, maxWidth: 768, marginBottom: 16 }}
            className="card"
            title={item.title}
            extra={<RightOutlined className="card-icon" />}
          >
            <Meta className="capitalize" description={item.description} />
          </Card>
        </Link>
      );
    });
  };

  return <section className="posts">{renderCard()}</section>;
};

export default PostList;
