import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
// import {createLogger} from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import {rootSaga} from './sagas/rootSaga';
import userReducer from './reducers/userReducer';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware, createLogger()),
// );

const root = combineReducers({
  user: userReducer,
});

// sagaMiddleware.run(rootSaga);

export default createStore(root, applyMiddleware(promise));
