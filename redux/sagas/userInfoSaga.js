import {takeLatest, put} from 'redux-saga/effects';

function* updateUserInfo(info) {
  try {
    yield put({
      type: 'UPDATE_USER_INFO_ASYNC',
      payload: info
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateUserInfo(info) {
    yield takeLatest({'UPDATE_USER_INFO', updateUserInfo})
}
