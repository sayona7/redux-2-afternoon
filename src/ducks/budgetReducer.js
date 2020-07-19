import axios from "axios";

const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA"

const initialState = {
        purchases: [],
        budgetLimit: null,
        loading: false
}

export const requestBudgetData = () => {
    let data = axios.get("/api/budget-data").then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}


export default function reducer (state = initialState, action) {
    switch(action.type) {
        case REQUEST_BUDGET_DATA + "_PENDING":
            return {...state, loading: true}
        case REQUEST_BUDGET_DATA + "_FULFILLED":
            return {...state, ...action.payload, loading: false}
        default:
            return state;
    }
}