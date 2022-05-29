import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from '../action-types/expenses';

export const addExpense = (data) => {
    // console.log(data);
    return {
        type: ADD_EXPENSE,
        data, //data: data {if key and value is same we can pass it like that}
    };
};

export const deleteExpense = (data) => {
    return {
        type: DELETE_EXPENSE,
        data,
    };
};

export const searchExpense = (query) => {
    return {
        type: SEARCH_EXPENSE,
        query,
    };
};