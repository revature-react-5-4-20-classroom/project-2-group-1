//This is where we actually build the store, using Redux library.
// For the most part we don't have to change this file
// There's going to be some boilerplate here
import { compose, applyMiddleware, Store, createStore } from 'redux';
import thunk from 'redux-thunk';
import { state } from './reducers';

//This line lets us use Redux dev tools, taken from redux dev tools documentation
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//Apply redux thunk "middleware".  In Redux, middleware takes place between an action being dispatched
// and it hitting the reducer.  We use thunk as boilerplate in case we need any asynchornous
// action dispatching.
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

//actually build the store, our global state
export const store: Store<any> = createStore(
  state,
  enhancer
)