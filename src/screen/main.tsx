import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import tw from '@/lib/tailwind';
import ChildComponent from '@/component/ChildComponent';
import usePost from '@/hooks/usePost';

function MainScreen() {
  const {posts, isLoading, isError} = usePost();
  useEffect(() => {
    console.log('부모 컴포넌트 렌더링');
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }
  return (
    <View style={tw`bg-gray-light`}>
      <Text>메인 페이지</Text>
      <ChildComponent posts={posts} />
    </View>
  );
}

export default MainScreen;
