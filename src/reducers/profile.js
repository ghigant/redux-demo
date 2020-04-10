import { PROFILE_SET } from '../actions/profile';


export default (state = null, action) => {
    switch(action.type) {
        case PROFILE_SET:
            return Object.assign({}, state, action.user)
        default:
            return state;
    }
  }