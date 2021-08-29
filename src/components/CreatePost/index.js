import React from "react";
import { useMutation } from "@apollo/client";
import { Form, Input, Button, notification } from "antd";
import { LINKS_PER_PAGE } from "../../constants";
import { FEED_QUERY } from "../../components/LinkList";
import { CREATE_POST_MUTATION } from "./mutation";
import "./style.css";

const CreatePost = () => {
  const [form] = Form.useForm();

  const showSuccessMessage = (newPost) => {
    const postId = newPost?.addNewPost.id;
        if (postId) {
          const btn = (
              <Button type="success" href={`/posts/${postId}`} onClick={() => notification.close()}>
                View Now
              </Button>
          );
          return notification.success({
            message: "Successfully Created",
            description: `New post is successfully created with id: ${postId}`,
            btn,
            duration: 0,
          });
        }
      return null;
  }

  const [createNewPost, { data, loading, error }] = useMutation(
    CREATE_POST_MUTATION,
    {
      onCompleted: (newPost) => showSuccessMessage(newPost),
    }
  );

  const onCreatePost = (values) => {
    createNewPost({ variables: values });
    form.resetFields();
  };

  return (
    <section className="create">
      <div className="create-container">
        <Form
          form={form}
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
            <Button type="primary" htmlType="submit" loading={loading}>
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default CreatePost;
