import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import completeQuestions from '../redux/reducers/userReducer';

import Swiper from 'react-native-swiper';
import SlideQuestion from './SlideQuestion';

const Questionaire = props => {
  const [index, setIndex] = useState(0);
  const questions = [
    "Hi! I'm Andi, and I'll be getting you set up with your own board-certified clinician. First things first, what should I call you?",
    // `Nice to meet you, ${props.user.parentName}, and what should I call your child?`,
    // `What a great name! And how old is ${props.user.name}?`,
    // `Is ${props.user.name} male, female, or other?`,
    // `Got it! Does ${props.user.name} communicate with you?`,
    // `Thanks! Does ${props.user.name} like playing with friends?`,
    // `Almost done! Has ${props.user.name} ever gone to school (If more than once answer applies, pick most recent)?`,
    // "And lastly, let your BCBA know where you'd like to start!",
  ];

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        loop={false}
        index={index}
        showsHorizontalScrollIndicator={false}>
        <SlideQuestion
          endQuestionaire={props.setQuestionaire}
          index={index}
          question={questions[0]}
        />
        {/* <SlideQuestion index={index} question={questions[1]}/>
        <SlideQuestion index={index} question={questions[2]}/>
        <SlideQuestion index={index} question={questions[3]}/>
        <SlideQuestion index={index} question={questions[4]}/>
        <SlideQuestion index={index} question={questions[5]}/>
        <SlideQuestion index={index} question={questions[6]}/>
        <SlideQuestion index={index} question={questions[7]}/> */}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

function mapStateToProps(reduxState) {
  return {
    parentName: reduxState.user.parentName,
    name: reduxState.user.name,
    age: reduxState.user.age,
    sex: reduxState.user.sex,
    conversational: reduxState.user.conversational,
    playful: reduxState.user.playful,
    school: reduxState.user.school,
    focus: reduxState.user.focus,
    questionsComplete: reduxState.user.questionsComplete,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     updateUserInfo: () => dispatch({type: UPDATE_USER_INFO, payload: userInfo}),
//   };
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  {completeQuestions},
)(Questionaire);
