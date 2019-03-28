import { SET_SIGNUP_DETAILS } from './Actions';

const initialState = [
  {
    username: '',
    email: '',
    password: '',
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
      case SET_SIGNUP_DETAILS:

      return [
        {
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password
        }
      ];

      default:
        return initialState

      // return state => state.merge({
      //   username: action.username,
      //   email: action.email,
      //   password: action.password,
      // })

  }
  
}