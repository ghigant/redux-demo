import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [];
const reducer = (state = {}) => {
  return state;
}

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
));