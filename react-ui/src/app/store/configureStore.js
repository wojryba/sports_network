/* eslint linebreak-style: 0 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index';
import api from '../middleware/api'

const createStoreWithMiddleware = applyMiddleware(api)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
