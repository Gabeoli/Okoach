import { SET_SIGNUP_DETAILS } from './Actions';

// const initialState = [
//   {
//     username: '',
//     email: '',
//     password: '',
//   }
// ]

export default function (state = {}, action) {
  switch (action.type) {
      case SET_SIGNUP_DETAILS:
        return Object.assign({}, state, {
          login: action.payload,
        });
      default:
        return state;
  }
}