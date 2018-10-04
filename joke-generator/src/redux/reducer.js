import assert from 'assert'
import IM from 'immutable'
import ActionTypes from './actions'

const initialState = IM.fromJS({
  joke: null,
  loading: false,
  success: false,
  succMsg: null,
  error: false,
  errMsg: null,
})

const jokeHandler = (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case (ActionTypes.TOGGLE_FETCH):
      newState = state.set('loading', action.payload.loading)
      newState = state.set('joke', action.payload.joke)
      break
    case (ActionTypes.TOGGLE_ERR):
      newState = state.set('error', Boolean(action.payload.error))
        .set('errMsg', action.payload.error)
      break
    case (ActionTypes.TOGGLE_SUCC):
      newState = state.set('success', Boolean(action.payload.msg))
        .set('succMsg', action.payload.msg)
      break;
    case (ActionTypes.TOGGLE_LOADING):
      newState = state.set('loading', action.payload.loading)
      break
    default:
      break
  }

  assert.ok(IM.Map.isMap(newState), 'You did not return a Immutable Object')

  return newState
}

export default jokeHandler
