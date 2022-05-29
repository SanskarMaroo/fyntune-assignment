import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

const reducer = combineReducers({
    shops: expenseReducer,
});

const initialState = {};
const store = createStore(reducer, initialState);

export default store;