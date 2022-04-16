import * as types from "./actionType"

const initialState = {
    countries: [],
    country: {},
    loading: true
}

const countriesReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_COUNTRIES:
            return {...state, countries: action.payload, loading: false}
        case types.DELETE_COUNTRIES:
        case types.ADD_COUNTRY:
            return {...state, loading: false}
        case types.GET_SINGLE_COUNTRY:
            return {
                ...state,
                country: action.payload,
                loading: false
            }
        case types.UPDATE_COUNTRY:
        default:
            return state;
    }
}

export default countriesReducer;