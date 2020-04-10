
import { store } from './store';
import {increment, decrement} from './actions/app';
import {PROFILE_FETCH, setProfile } from './actions/profile';

console.log(store.getState());

store.dispatch(increment())

store.dispatch(decrement());

store.dispatch({
  type: PROFILE_FETCH,
  userID: '100'
})

store.dispatch(setProfile(
  {
    id: 100,
  }
))