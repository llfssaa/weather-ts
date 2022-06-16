import {combineReducers, createStore} from "redux";
import homeReducer from "./home-reducer";

let reducers = combineReducers({
    home: homeReducer,
})

let store = createStore(reducers)

export default store