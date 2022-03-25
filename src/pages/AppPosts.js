import React, { useState, useEffect } from "react";
import ServicePosts from "../services/ServicePosts";
import SinglePost from "../components/SinglePost";
import { Link, useHistory } from "react-router-dom";

function AppPosts() {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    async function fetchPosts() {
    const data = await ServicePosts.getAll();
    setPosts(data);
    }

    useEffect(() => {
    fetchPosts();
    }, 
    []);

    const handleDelete = async (id) => {
        const data = await ServicePosts.delete(id);
        if (data.count > 0) {
          setPosts(posts.filter((post) => id !== post.id));
        }
    };

  return (
    <div>
        <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3  style={{ color: "pink" }}>{post.title}</h3>
            <Link to={`post/${post.id}`}>View Post</Link>
            <button type='button' onClick={() => history.push(`/edit/${post.id}`)}>Edit</button>
            <button type='button' onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppPosts;
