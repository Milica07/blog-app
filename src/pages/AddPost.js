import React, { useState } from "react";
import { useHistory } from "react-router-dom/";
import ServicePosts from "../services/ServicePosts";

function AddPost() {
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await ServicePosts.add(newPost);
    history.push("/posts");
  };
  
  return (
    <div>
      <h3>Write a new post</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='Post title' value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}/>
        <br />
        <input type='text' placeholder='Post text...' style={{ height: "100px" }}
          name='text' value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddPost;