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

}

export default new ServicePosts();