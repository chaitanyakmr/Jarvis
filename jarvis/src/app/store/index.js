import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import saga from './saga';
import app from '../../app';
 
const sagaMiddleware = createSagaMiddleware();
/**
 * List of middlewares
 * 1.actionRouterMiddleware -> routing to the relevant actions when clicking on the sidebar items.
 * 2.sagaMiddleware -> controls all the side-effects like fetching data from the server.
 * 3.routerMiddleware -> using the routermiddleware of react-router-redux
 * send LOCATION_CHANGE action when url is updated
 * 4.loggerMiddleware -> logging every action with the state information
 */
const middleware = applyMiddleware( 
    sagaMiddleware,
    routerMiddleware(browserHistory) 
);

/**
 * create the redux store with redux devtools enabled in the browser
 */
const store = createStore(reducer, composeWithDevTools(middleware));

/**
 * run the main saga file
 */
sagaMiddleware.run(saga);

export default store;
