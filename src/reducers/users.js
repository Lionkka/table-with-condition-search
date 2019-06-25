import { FETCH_USERS, ADD_USER, CHANGE_USER } from '../constants/actionTypes'

const initialState = []
export default function users (state = initialState, action) {

  switch (action.type) {
    case FETCH_USERS:
      return action.payload.slice()

    case CHANGE_USER: {
      const user = action.payload
      const newState = state.slice()
      const index = newState.findIndex(({ id }) => id === user.id)
      newState[index] = user
      return newState

    }

    case ADD_USER:
      return [...action.payload, action.payload]

    default:
      return state
  }
}
