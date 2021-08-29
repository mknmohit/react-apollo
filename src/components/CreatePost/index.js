import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Form, Input, Button, Checkbox } from "antd";
import { LINKS_PER_PAGE } from "../../constants";
import { FEED_QUERY } from "../../components/LinkList";
import { CREATE_POST_MUTATION } from "./mutation";
import "./style.css";

const CreatePost = () => {
  const history = useHistory();

  const [createNewPost, { data, loading, error }] = useMutation(
    CREATE_POST_MUTATION,
    {
      onCompleted: () => history.push(`/posts/${data.addNewPost.id}`),
    }
  );

  const onCreatePost = (values) => {
    createNewPost({ variables: values });
  };

  return (
    <section className="create">
      <div className="create-container">
        <Form
          size="large"
          layout="vertical"
          onFinish={onCreatePost}
          scrollToFirstError
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter title of the post",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter some description about the post",
              },
            ]}
          >
            <Input.TextArea autoSize={{ minRows: 12 }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default CreatePost;
