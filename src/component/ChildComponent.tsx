import tw from '@/lib/tailwind';
import {ScrollView, Text, View} from 'react-native';

type Props = {
  posts: any;
};

function ChildComponent({posts}: Props) {
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
