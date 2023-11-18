import axios from 'axios';
import { Post } from '../../src/models/Post';

export const getPosts = async (): Promise<Post[]> => {
  let response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};