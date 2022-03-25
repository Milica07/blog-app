import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/";
import ServicePosts from "../services/ServicePosts";

function AddPost() {
  const { id } = useParams();
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  let history = useHistory();

  async function fetchPost() {
    const { id: _, ...data } = await ServicePosts.get(id);
    setNewPost({ ...data });
  }
  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, 
  [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await ServicePosts.add(newPost);

      if (id) {
        await ServicePosts.edit(id, newPost);
      } else {
        await ServicePosts.add(newPost);
      }

    history.push("/posts");
  };

  const handleReset = () => {
    setNewPost({title: '', text: ''});
  };

  return (
    <div>
      {id ? "Edit this post" : "Write a new post"}
      <form onSubmit={handleSubmit}>
        <input required minLength='2' type='text' name='title' placeholder='Post title' value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}/>
        <br />
        <input required maxLength='300' type='text' placeholder='Post text...' style={{ height: "100px" }}
          name='text' value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}/>
        <br />
        <button type='submit'>Submit</button>
        <button type='button' onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default AddPost;