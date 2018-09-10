import { createStore } from 'redux'

import reducers from 'redux/reducer'

const app = createStore(reducers)

export default app
