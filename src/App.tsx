import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainScreen from '@/screen/main';
import {RecoilRoot} from 'recoil';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RecoilRoot>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <QueryClientProvider client={queryClient}>
          <MainScreen />
        </QueryClientProvider>
      </SafeAreaView>
    </RecoilRoot>
  );
}

export default App;
