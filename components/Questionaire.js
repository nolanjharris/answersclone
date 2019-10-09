import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Swiper from 'react-native-swiper';

const Questionaire = props => {
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        loop={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.slide}>
          <View style={styles.slideView}>
            <Text style={styles.text}>
              Hi! I'm Andi, and I'll be getting you set up with your own
              board-certified clinician. First things first, what should I call
              you?
            </Text>
            <View style={styles.inputView}>
              <Text style={styles.inputViewText}>Question 1 of 8</Text>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.slideView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.link}>Already have an account?</Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
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
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 30,
    width: '100%',
    backgroundColor: 'gray',
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

export default Questionaire;
