import React, {useEffect} from 'react';
import {LogBox, Text, StatusBar, TextInput, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import storage from './src/reducers/store';
import MainNavigator from './src/navigation/mainNavigator';

const {store, persistor} = storage();

/**disable warnings */
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
