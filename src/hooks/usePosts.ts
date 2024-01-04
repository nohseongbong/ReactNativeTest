import {useEffect} from 'react';
import {getPosts} from '@/api/posts/api';
import {useQuery} from '@tanstack/react-query';
import {useSetRecoilState} from 'recoil';
import {postsState} from '@/atoms/postState';

const usePosts = () => {
  const setPosts = useSetRecoilState(postsState);
  const {
    data: fetchedPosts,
    isLoading,
    isError,
  } = useQuery(['posts'], getPosts);

  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts, setPosts]);

  return {posts: fetchedPosts, isLoading, isError};
};

export default usePosts;
