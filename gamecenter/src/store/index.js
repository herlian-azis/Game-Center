import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { gamesReducer, favoriteReducer } from './reducer'


const reducers = combineReducers({
    favoriteReducer,
    gamesReducer
})
const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store