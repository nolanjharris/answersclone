import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Questionaire from './Questionaire';
import Chat from './Chat';
import HomeScreen from './HomeScreen';
import {connect} from 'react-redux';

function RootComponent(props) {
  const [questionaire, setQuestionaire] = useState(false);
  return (
    <View style={styles.screen}>
      {questionaire ? (
        <Questionaire setQuestionaire={setQuestionaire} />
      ) : props.questionsComplete ? (
        <Chat />
      ) : (
        <HomeScreen getStarted={setQuestionaire} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
});

function mapStateToProps(reduxState) {
  return {
    questionsComplete: reduxState.user.questionsComplete,
  };
}

export default connect(mapStateToProps)(RootComponent);
