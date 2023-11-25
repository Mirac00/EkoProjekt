import axios from 'axios';
import { Photo } from '../models/Photo';

export const getPhotos = async (albumId: number): Promise<Photo[]> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  return response.data;
};
