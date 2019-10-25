import axios from 'axios';

const initialState = {
  parentName: '',
  name: '',
  age: 0,
  sex: '',
  conversational: '',
  playful: '',
  school: '',
  focus: '',
  questionsComplete: false,
  loading: false,
};

const UPDATE_PARENT_NAME = 'UPDATE_PARENT_NAME';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_AGE = 'UPDATE_AGE';
const UPDATE_SEX = 'UPDATE_SEX';
const UPDATE_CONVERSATIONAL = 'UPDATE_CONVERSATIONAL';
const UPDATE_PLAYFUL = 'UPDATE_PLAYFUL';
const UPDATE_SCHOOL = 'UPDATE_SCHOOL';
const UPDATE_FOCUS = 'UPDATE_FOCUS';
const COMPLETE_QUESTIONS = 'COMPLETE_QUESTIONS';

export function updateParentName(parentName) {
  return {
    type: UPDATE_PARENT_NAME,
    payload: parentName,
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name,
  };
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    payload: age,
  };
}

export function updateSex(sex) {
  return {
    type: UPDATE_SEX,
    payload: sex,
  };
}

export function updateConversational(conversational) {
  return {
    type: UPDATE_CONVERSATIONAL,
    payload: conversational,
  };
}

export function updatePlayful(playful) {
  return {
    type: UPDATE_PLAYFUL,
    payload: playful,
  };
}

export function updateSchool(school) {
  return {
    type: UPDATE_SCHOOL,
    payload: school,
  };
}

export function updateFocus(focus) {
  return {
    type: UPDATE_FOCUS,
    payload: focus,
  };
}

export function completeQuestions(userInfo) {
  return {
    type: COMPLETE_QUESTIONS,
  };
}

export default function reducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `${UPDATE_PARENT_NAME}_FULFILLED`:
      console.log(payload);
      return {
        ...state,
        parentName: payload,
      };
    case `${UPDATE_NAME}_FULFILLED`:
      return {
        ...state,
        name: payload,
      };
    case `${UPDATE_AGE}_FULFILLED`:
      return {
        ...state,
        age: payload,
      };
    case `${UPDATE_SEX}_FULFILLED`:
      return {
        ...state,
        sex: payload,
      };
    case `${UPDATE_CONVERSATIONAL}_FULFILLED`:
      return {
        ...state,
        conversational: payload,
      };
    case `${UPDATE_PLAYFUL}_FULFILLED`:
      return {
        ...state,
        playful: payload,
      };
    case `${UPDATE_SCHOOL}_FULFILLED`:
      return {
        ...state,
        school: payload,
      };
    case `${UPDATE_FOCUS}_FULFILLED`:
      return {
        ...state,
        focus: payload,
      };
    case COMPLETE_QUESTIONS:
      return {
        ...state,
        questionsComplete: true,
        loading: false,
      };
    default:
      return state;
  }
}
