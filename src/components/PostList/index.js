import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { LINKS_PER_PAGE } from "../../constants";
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from "react-router-dom";
import { Card, Skeleton } from "antd";
import { RightOutlined } from "@ant-design/icons";
import truncate from "lodash.truncate";
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
            <Meta className="capitalize" description={truncate(item.description, {length: 400})} />
          </Card>
        </Link>
      );
    });
  };

  return (
    <ScrollToTop>
      <section className="posts">{renderCard()}</section>
    </ScrollToTop>
  );
};

export default PostList;
