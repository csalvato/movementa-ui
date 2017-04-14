import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'
import createHistory from 'history/createBrowserHistory'
import { LOCATION_CHANGE, routerMiddleware } from 'react-router-redux'

export const history = createHistory()

import ReactGA from 'react-ga';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
  ReactGA.initialize('UA-96092057-2'); //Dev tracking code
} else if( !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ) {
  ReactGA.initialize('UA-96092057-1'); //Prod tracking code
}

function logPageView() {
  if( !process.env.NODE_ENV || process.env.NODE_ENV !== 'test' ) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}

const googleAnalytics = store => next => action => {
  if(action.type === LOCATION_CHANGE) {
    logPageView()
  }
  return next(action)
}

export default function configureStore(initialState = {}, storeHistory = history) {
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(storeHistory),
        googleAnalytics,
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
