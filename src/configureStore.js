import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { UPDATE_PAGE_TITLE } from 'actions'
import ReactGA from 'react-ga';

export const history = createHistory()

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
  ReactGA.initialize('UA-96092057-2'); //Dev tracking code
} else if( !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ) {
  ReactGA.initialize('UA-96092057-1'); //Prod tracking code
}

function logPageView(pageTitle = 'Unknown Page Title') {
  if( !process.env.NODE_ENV || process.env.NODE_ENV !== 'test' ) {
    const page = window.location.pathname + window.location.search
    ReactGA.set({ title: pageTitle,
                  page: page,
                  location: process.env.REACT_APP_MOVEMENTA_API_HOST});
    ReactGA.pageview(page);
  }
}

const googleAnalytics = store => next => action => {
  if(action.type === UPDATE_PAGE_TITLE) {
    logPageView(action.pageTitle)
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
