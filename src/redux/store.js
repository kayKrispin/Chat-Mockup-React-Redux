import { applyMiddleware,createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk,logger))
)
