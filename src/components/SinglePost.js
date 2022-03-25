import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicePosts from "../services/ServicePosts";
import AddComment from "./AddComment";

function SinglePost() {
  const [post, setPost] = useState("");
  const { id } = useParams();

  async function fetchPost() {
    const data = await ServicePosts.get(id);
    setPost(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <h5>Comments: </h5>
      <ul>
        {post.comments && post.comments.map((comment) => (
            <li key={comment.id} >
              {comment.text}
            </li>
          ))}
      </ul>
      <AddComment postId={id} />
    </div>
  )
}

export default SinglePost;