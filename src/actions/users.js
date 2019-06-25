import { FETCH_USERS, CHANGE_USER } from '../constants/actionTypes'
import { generateUsers } from '../utils'


export const fetchUsers = () => (dispatch) => {
  return dispatch({
    type: FETCH_USERS,
    payload: generateUsers(10),
  })
}

export const changeUser = (user) => (dispatch) => {
  return dispatch({
    type: CHANGE_USER,
    payload: user,
  })
}
