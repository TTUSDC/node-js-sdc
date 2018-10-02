import Request from 'utils/request'
import logger from 'utils/logger'

const TYPES = {
  TOGGLE_FETCH: 'TOGGLE_FETCH',
  TOGGLE_ERR: 'TOGGLE_ERR',
  TOGGLE_LOADING: 'TOGGLE_LOADING',
  TOGGLE_SUCC: 'TOGGLE_SUCC',
}

// Pure Actions

function toggleSuccess(msg){
  return ({
    type: TYPES.TOGGLE_SUCC,
    payload: {
      msg: Boolean(msg) ? msg : null
    },
  })
}

/**
 * Starts and stops the fetching of jokes from API
 *
 * @returns {object} action - action for the reducer
 */
function toggleFetch(joke) {
  return ({
    type: TYPES.TOGGLE_FETCH,
    payload: {
      loading: Boolean(joke) ? true : false,
      joke: Boolean(joke) ? joke : null,
    }
  })
}

/**
 * Starts and stops the error handler
 *
 * @returns {object} action - action for the reducer
 */
function toggleErr(errMsg) {
  return ({
    type: TYPES.TOGGLE_ERR,
    payload: {
      error: Boolean(errMsg) ? errMsg : null
    }
  })
}

/**
 * Converts the weird formatting of the remote API
 */
function quoteHandler(string) {
  let format = []
  let i = 0
  while (i < string.length) {
    if (string.slice(i, i + 6) === '&quot;') {
      format.push(`"`)
      i += 6
    } else {
      format.push(string[i])
      i += 1
    }
  }
  return format.join("")
}

/**
 * Used to finish the loading
 */
function toggleLoading(loading) {
  return({
    type: TYPES.TOGGLE_LOADING,
    payload: { loading }
  })
}

// Async Actions

/**
 * Fetches jokes from the API and either signals and error or a joke
 */
export const fetchJokes = (type) => (dispatch) => Promise.resolve()
  .then(() => {
    dispatch(toggleLoading(true))
  })
  .then(async () => {
    try {
      let joke
      let request = new Request()
      switch(type) {
        case('ron'):
          joke = await request.getRonJoke()
          break
        case('chuck'):
          joke = await request.getChuckJoke()
          break
        case('cs'):
          joke = await request.getCSJoke()
          break
        case('user'):
          joke = await request.getUserJoke()
          break
        default:
          joke = await request.getChuckJoke()
          logger.error(`We do not support that joke type: ${type}`)
      }
      dispatch(toggleFetch(quoteHandler(joke)))
    } catch (err) {
      throw err
    }
  })
  .catch((err) => {
    logger.error(err || new Error('Unknown Error'))
    dispatch(handleError('Cannot Connect to Server. Please try again later'))
  })
  .finally(() => {
    dispatch(toggleLoading(false))
  })

/**
 * Creates a joke that will be saved into the database
 */
export const createJoke = (joke) => (dispatch) => Promise.resolve()
  .then(() => {
    dispatch(toggleLoading(true))
  })
  .then(async () => {
    try {
      let request = new Request()
      await request.createUserJoke(joke)
      dispatch(toggleSuccess('Joke Created Successfully'))
    } catch (err) {
      throw err
    }
  })
  .catch((err) => {
    logger.error(err || new Error('Unknown Error'))
    dispatch(handleError('Cannot Connect to Server. Please try again later'))
  })
  .finally(() => {
    dispatch(toggleLoading(false))
  })

/**
 * Error handler. Will also clear the error and loading state
 */
export const handleError = (err) => (dispatch) => Promise.resolve()
  .then(() => {
    logger.error(err || new Error('Unknown Error'))
    dispatch(toggleErr(err))
  })
  .finally(() => {
    dispatch(toggleLoading(false))
  })
  .finally(() => {
    setTimeout(() => {
      logger.error('Clearing Error')
      dispatch(toggleErr())
    }, 4000)
  })


/**
 * Set the success message
 */
export const handleSuccess = (msg) => (dispatch) => Promise.resolve()
  .then(() => {
    dispatch(toggleSuccess(msg))
  })
  .finally(() => {
    dispatch(toggleLoading(false))
  })
  .finally(() => {
    setTimeout(() => {
      logger.error('Clearing Success')
      dispatch(toggleSuccess())
    }, 4000)
  })


export default TYPES
