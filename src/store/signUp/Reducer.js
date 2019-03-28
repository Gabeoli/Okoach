import { SET_SIGNUP_DETAILS } from './Actions';

export default function (state = [], action) {
  switch (action.type) {
      case SET_SIGNUP_DETAILS:
      // return Object.assign({}, state, { signup: action.payload });

      return[
        ...state, {
          username: action.username,
          email: action.email,
          password: action.password
        }
      ]

      default: return state;
  }
}