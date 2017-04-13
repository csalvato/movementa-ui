import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()

export default function configureStore(initialState = {}, storeHistory = history) {
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(storeHistory),
        logger
      )
    )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export const storeWithEmptyState = configureStore({}, history);
