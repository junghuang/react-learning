import {
  INCREAMENT,
  DECREAMENT,
  ADDNUMS,
  SUBNUMS
} from './constants.js'

const initState = {
  count: 0
}

function reducer (state = initState, action) {
  switch (action.type) {
    case INCREAMENT:
      return {...initState, count: state.count + 1}
    case DECREAMENT:
      return {...initState, count: state.count - 1}
    case ADDNUMS:
      return {...initState, count: state.count + action.num}
    case SUBNUMS:
      return {...initState, count: state.count - action.num}
    default:
      return state
  }
}

export default reducer
