import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import postReducer from './reducers/postReducer';

const reducers = combineReducers({
  posts: postsReducer,
  post: postReducer
});

export const initStore: MakeStore = () =>
  createStore(reducers, applyMiddleware(thunk));

export const wrapper = createWrapper(initStore);

export type RootState = ReturnType<typeof reducers>;
