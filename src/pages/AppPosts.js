import React, { useState, useEffect } from "react";
import ServicePosts from "../services/ServicePosts";
import SinglePost from "../components/SinglePost";
import { Link } from "react-router-dom";

function AppPosts() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
    const data = await ServicePosts.getAll();
    setPosts(data);
    }

    useEffect(() => {
    fetchPosts();
    }, 
    []);

  return (
    <div>
        <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`post/${post.id}`}>View Post</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppPosts;
