import {delay, takeLatest, put} from 'redux-saga/effects';

function* updateUserInfo(info) {
  try {
    yield put({
      type: 'UPDATE_USER_INFO_ASYNC',
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateUserInfo() {}
