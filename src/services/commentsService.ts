import axios from 'axios';
import { Comment } from '../../src/models/Comment';

export const getComments = async (): Promise<Comment[]> => {
  let response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  return response.data;
};