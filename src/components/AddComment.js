import React, { useState } from "react";
import ServicePosts from "../services/ServicePosts";

function AddComment({ postId }) {
  const [comment, setComment] = useState({ text: "" });

  const handleSubmit = async () => {
    const data = await ServicePosts.addComment(comment, postId);
  };

return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea required name='text' cols='50' rows='5' value={comment.text} placeholder='Add a comment...'
          onChange={(e) => setComment({ text: e.target.value })}></textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddComment;