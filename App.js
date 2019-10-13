import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/reducers/userReducer';

import HomeScreen from './components/HomeScreen';
import Questionaire from './components/Questionaire';

const App = () => {
  const [questionaire, setQuestionaire] = useState(false);
  return (
    <View>
      {!questionaire ? (
        <HomeScreen getStarted={setQuestionaire} />
      ) : (
        <Questionaire questionaire={questionaire} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
});

export default App;
