import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Swiper from 'react-native-swiper';

const Slider = props => {
  return (
    <Swiper showsButtons={false} dotColor="#b5b7b7" activeDotColor="#fff">
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1501615132733-7d7f91b5d4bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={styles.title}>
          An Affordable Approach to Autism Therapy
        </Text>
        <Text style={styles.text}>
          With human-powered technology, we meet you where you are.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1505919618793-51ca43604ff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={styles.title}>Never Miss An Appointment</Text>
        <Text style={styles.text}>
          It's the easiest way to get everyone involved in your child's autism.
          treatment
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={styles.title}>You Don't Have To Do This Alone</Text>
        <Text style={styles.text}>
          Jumpstart your child's treatment with an audio or video planning
          session.
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9a83c6',
  },
  image: {
    width: '100%',
    height: '45%',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Slider;
