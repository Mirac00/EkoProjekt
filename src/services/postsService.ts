import axios from 'axios';
import { Post } from '../models/Post';

export const getPosts = async (): Promise<Post[]> => {
  let response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export const updatePost = async (post: Post): Promise<void> => {
  console.log('Updating post:', post); 
  let response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  console.log('Response:', response); 
};
