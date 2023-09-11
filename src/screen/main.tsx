import React, {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Text, View} from 'react-native';
import tw from '@/lib/tailwind';
import ChildComponent from '@/component/ChildComponent';
import {getPosts} from '@/api/posts/api';

function MainScreen() {
  const {data} = useQuery(['posts'], getPosts);
  useEffect(() => {
    console.log('부모 컴포넌트 렌더링');
  }, []);
  return (
    <View style={tw`bg-gray-light`}>
      <Text>메인 페이지</Text>
      <ChildComponent posts={data} />
    </View>
  );
}

export default MainScreen;
