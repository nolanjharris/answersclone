import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {completeQuestions} from '../redux/reducers/userReducer';

function SlideQuestion(props) {
  function handleNext() {
    // if (index === 8) {
    //   props.completeQuestions(props.user);
    //   props.setQuestionaire(false);
    // } else {
    //   setIndex(index + 1);
    // }
    props.endQuestionaire(false);
    props.completeQuestions();
  }

  return (
    <View style={styles.slide}>
      <View style={styles.slideView}>
        <Text style={styles.text}>{props.question}</Text>
        <View style={styles.inputView}>
          <Text style={styles.inputViewText}>
            Question {props.index + 1} of 8
          </Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.slideView}>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Already have an account?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9a83c6',
    padding: 20,
  },
  slideView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginVertical: 15,
  },
  inputView: {
    width: '100%',
  },
  inputViewText: {
    height: 40,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    padding: 10,
    paddingBottom: 8,
    height: 40,
    width: '100%',
    backgroundColor: 'gray',
    fontSize: 20,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#04D4F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    color: '#fff',
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
  };
}

export default connect(
  mapStateToProps,
  {completeQuestions},
)(SlideQuestion);
