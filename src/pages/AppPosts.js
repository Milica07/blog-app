import React, { useState, useEffect } from "react";
import ServicePosts from "../services/ServicePosts";
import SinglePost from "../components/SinglePost";

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
            <h1>{post.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppPosts;
