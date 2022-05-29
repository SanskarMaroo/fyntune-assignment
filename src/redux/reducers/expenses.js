import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from '../action-types/expenses'

const initialList = () => {
    const list = localStorage.getItem("shop-list");
    let shops = [];
    if (list) {
        shops = JSON.parse(list);
    }

    return shops;
}

const initialState = {
    shopList: initialList(),
    query: "",
}

export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: {
            localStorage.setItem("shop-list", JSON.stringify([...state.shopList, action.data]));
            return {
                ...state,
                shopList: [...state.shopList, action.data],
            }
        }
        case DELETE_EXPENSE: {
            const { data } = action;
            const updatedList = state.shopList.filter(
                (item) => item.createdAt !== data.createdAt
            );
            localStorage.setItem("shop-list", JSON.stringify(updatedList));
            return {
                ...state,
                shopList: updatedList,
            }
        }
        case SEARCH_EXPENSE: {
            const { query } = action;
            return {
                ...state,
                query,
            };
        }
        default:
            return state;
    }
}

// import { ADD_EXPENSE } from "../action-types/expenses";

// const initialState = {
//     shopList: [],
// };

// export const expenseReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_EXPENSE: {
//             return {
//                 ...state,
//                 shopList : [...state.shopList, action.data]
//             };
//         }
//         default:
//             return state;
//     }
// }