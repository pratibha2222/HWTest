/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './src/redux/reducers';
import AppNavigation from './src/navigation/AppNavigation';
import sagas from './src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

sagaMiddleware.run(sagas);


const App: React.FC = () => {
    return (
      <Provider store={store}>
          <AppNavigation />
      </Provider>
  
    );
  };

export default App;
