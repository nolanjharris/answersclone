import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Slider from './Slider';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Slider />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.getStarted(true)}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    padding: 20,
  },
  button: {
    borderRadius: 6,
    backgroundColor: '#04D4F0',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomeScreen;
