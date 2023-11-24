import axios from 'axios';

export const getAlbums = async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return response.data;
};
