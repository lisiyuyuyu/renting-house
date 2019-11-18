import { createStore } from 'redux'

// 导入reducer
import reducer from './reducer'

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())