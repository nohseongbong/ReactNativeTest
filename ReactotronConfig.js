import Reactotron from 'reactotron-react-native';
import {mst} from 'reactotron-mst';

Reactotron.configure()
  .setAsyncStorageHandler()
  .configure()
  .useReactNative(mst)
  .connect();
