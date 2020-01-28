import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const history = createBrowserHistory()


export default () => {
  return createStore(rootReducer(history), applyMiddleware(thunk))
};

export { history }
