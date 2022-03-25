import axios from "axios";

class ServicePosts {
  constructor() {

    const instance = axios.create({
      baseURL: "http://localhost:5500/api",
    });

    this.client = instance;

  }

  async getAll() {
    try {
      const { data } = await this.client.get("posts");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async get(id) {
    try {
      const { data } = await this.client.get(`posts/${id}?filter={"include":["comments"]}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async add(post) {
    try {
      const { data } = await this.client.post("posts", post);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async edit(id, post) {
    try {
      const { data } = await this.client.put(`posts/${id}`, post);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete(`posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async addComment(comment, postId) {
    try {
      const { data } = await this.client.post(`posts/${postId}/comments`, comment);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }


}

export default new ServicePosts();