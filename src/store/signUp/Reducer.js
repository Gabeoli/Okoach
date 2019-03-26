import { SET_SIGNUP_DETAILS } from './Actions';

export default function (state = [], action) {
  switch (action.type) {
      case SET_SIGNUP_DETAILS:
      return Object.assign({}, state, { signup: action.payload });

      default: return state;
  }
}