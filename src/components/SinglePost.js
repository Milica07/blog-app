import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicePosts from "../services/ServicePosts";

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
    </div>
  )
}

export default SinglePost;