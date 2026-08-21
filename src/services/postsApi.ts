import axios from 'axios';
import type { Post } from '../store/postsSlice';

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=8';

export const obtenerPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_URL, {
    timeout: 10000,
  });

  return response.data;
};
