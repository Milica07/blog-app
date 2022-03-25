import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicePosts from "../services/ServicePosts";
import AddComment from "./AddComment";
import useFormattedDate from "../hooks/useFormattedDate";

function SinglePost() {
  const [post, setPost] = useState("");
  const { id } = useParams();
  const [date, setDate] = useState("0");

  async function fetchPost() {
    const data = await ServicePosts.get(id);
    setPost(data);
    setDate(data.createdAt);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  const fromattedDate = useFormattedDate(date);

  return (
    <div>
      <h3>{post.title}</h3><em style={{ fontSize: "10px" }}>{fromattedDate}</em>
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