import Request from 'utils/request'
import logger from 'utils/logger'

const TYPES = {
  TOGGLE_FETCH: 'TOGGLE_FETCH',
  TOGGLE_ERR: 'TOGGLE_ERR',
  TOGGLE_LOADING: 'TOGGLE_LOADING',
}

/**
 * Starts and stops the fetching of jokes from API
 *
 * @returns {object} action - action for the reducer
 */
const toggleFetch = (joke) => ({
  type: TYPES.TOGGLE_FETCH,
  payload: {
    loading: Boolean(joke) ? true : false,
    joke: Boolean(joke) ? joke : null,
  }
})

/**
 * Starts and stops the error handler
 *
 * @returns {object} action - action for the reducer
 */
const toggleErr = (errMsg) => ({
  type: TYPES.TOGGLE_ERR,
  payload: {
    error: Boolean(errMsg) ? errMsg : null
  }
})

/**
 * Converts the weird formatting of the remote API
 */
const quoteHandler = (string) => {
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
const toggleLoading = (loading) => ({
  type: TYPES.TOGGLE_LOADING,
  payload: { loading }
})

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
          break;
        case('chuck'):
          joke = await request.getChuckJoke()
          break;
        case('cs'):
          joke = await request.getCSJoke()
          break;
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
    dispatch(toggleErr('Cannot Connect to Server. Please try again later'))
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
 * Error handler. Will also clear the error and loading state
 */
export const handleError = (err) => (dispatch) => Promise.resolve()
  .then(() => {
    logger.error(err || new Error('Unknown Error'))
    dispatch(toggleErr('Internal Server Error!'))
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

export default TYPES
