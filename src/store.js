import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middlewares/logger';
import appReducer from './reducers/app';
import profileReducer from './reducers/profile';


const middleware = [ logger ];


const rootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
));