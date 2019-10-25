import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Chat(props) {
  return (
    <View style={styles.container}>
      <Text>CHAT!!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Chat;
