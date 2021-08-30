import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { LINKS_PER_PAGE } from "../../constants";
import ScrollToTop from "../../components/ScrollToTop";
import { Link } from "react-router-dom";
import { Card, Pagination, Skeleton } from "antd";
import { RightOutlined } from "@ant-design/icons";
import truncate from "lodash.truncate";
import { POSTS_PER_PAGE } from "../../utils/constants";
import { POSTS_QUERY } from "./query";
import "./styles.css";

const { Meta } = Card;

const PostList = () => {
  const [currentPageState, setCurrentPageState] = useState(1);
  const [postsPerPageState, setPostsPerPageState] = useState(POSTS_PER_PAGE);

  const { data, loading, error } = useQuery(POSTS_QUERY, {
    variables: {
      currentPage: currentPageState,
      itemsPerPage: postsPerPageState,
    },
  });

  const onChangePage = (page) => {
    setCurrentPageState(page);
  };

  const onShowSizeChange = (current, size) => {
    setPostsPerPageState(size);
  }

  const renderPagination = () => {
    if (data?.getAllPosts?.total) {
      return (
        <div className="pagination">
          <Pagination
            defaultCurrent={data.getAllPosts.currentPage}
            total={data.getAllPosts.total}
            defaultPageSize={postsPerPageState}
            onChange={onChangePage}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            pageSizeOptions={[3, 6, 10, 20, 50, 100]}
          />
        </div>
      );
    }
  };

  const renderCard = () => {
    if (loading) {
      return (
        <div className="card-container">
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      );
    }
    return data?.getAllPosts?.results?.map((item) => {
      return (
        <Link to={`/posts/${item.id}`} key={item.id} className="card-container">
          <Card
            hoverable
            style={{ minWidth: 320, maxWidth: 800, marginBottom: 16 }}
            className="card"
            title={item.title}
            extra={<RightOutlined className="card-icon" />}
          >
            <Meta
              className="capitalize"
              description={truncate(item.description, { length: 400 })}
            />
          </Card>
        </Link>
      );
    });
  };

  return (
    <ScrollToTop>
      <section className="posts">
        {renderCard()}
        {renderPagination()}
      </section>
    </ScrollToTop>
  );
};

export default PostList;
