// services/IUserActivistService.ts
import axios from 'axios';
import { userActivist } from '../models/UserActivist';

export const getUser = async (id: number): Promise<userActivist> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};
