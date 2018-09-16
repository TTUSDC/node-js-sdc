import ActionTypes from './actions'
import IM from 'immutable'

const initialState = IM.fromJS({
  joke: null,
  loading: false,
  error: false,
  errMsg: null,
})

const jokeHandler = (state = initialState, action) => {
  switch(action.type) {
    case(ActionTypes.TOGGLE_FETCH):
      state =  state.set('loading', action.payload.loading)
      state =  state.set('joke', action.payload.joke)
      break
    case(ActionTypes.TOGGLE_ERR):
      state = state.set('error', Boolean(action.payload.error))
      state = state.set('errMsg', action.payload.error)
      break
    default:
      break
  }

  return state
}

export default jokeHandler
