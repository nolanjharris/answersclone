import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/reducers/userReducer';

import HomeScreen from './components/HomeScreen';
import Questionaire from './components/Questionaire';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        {/* <HomeScreen /> */}
        <Questionaire />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
});

export default App;
