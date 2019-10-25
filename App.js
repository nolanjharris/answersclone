import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import RootComponent from './components/RootComponent';

const App = () => {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
};

export default App;
