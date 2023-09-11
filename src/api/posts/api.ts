import {axiosInstance} from '../config';

export const getPosts = async () => {
  const {data} = await axiosInstance.get('/posts');
  return data;
};
