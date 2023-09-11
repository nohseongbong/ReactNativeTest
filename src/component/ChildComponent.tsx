import tw from '@/lib/tailwind';
import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';

type Props = {
  posts: any;
};

function ChildComponent({posts}: Props) {
  const red = '#ddd';
  useEffect(() => {
    console.log('자식 컴포넌트 렌더링');
  }, []);
  return (
    <ScrollView>
      <View>
        {posts?.map((item: any) => {
          return (
            <View style={tw`my-10 bg-blue shadow-lg`} key={item.id}>
              <Text>제목 : {item.title}</Text>
              <Text>내용 : {item.body}</Text>
              <Text>유저 : {item.userId}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default ChildComponent;
