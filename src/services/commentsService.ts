import axios from 'axios';
import { Comment } from '../models/Comment';

export const getComments = async (): Promise<Comment[]> => {
  let response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  return response.data;
};

export const addComment = async (comment: Comment): Promise<void> => {
  console.log('Adding comment:', comment); 
  let response = await axios.post('https://jsonplaceholder.typicode.com/comments', comment);
  console.log('Response:', response); 
};

export const getHighestCommentId = async (): Promise<number> => {
  let comments = await getComments();
  let highestId = Math.max(...comments.map(comment => comment.id));
  return highestId;
};
