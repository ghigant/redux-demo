import {INCREMENT, DECREMENT} from '../actions/app';

export default (state = { value: 0 }, action) => {
    if (action.type === INCREMENT) {
      return { 
        ...state,
        value: state.value + 1
       };
    } else if (action.type === DECREMENT) {
      return { value: state.value - 1 };
    }
    return state;
}