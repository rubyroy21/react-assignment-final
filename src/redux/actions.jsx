import * as types from "./actionType"
import axios from "axios"

const getCountries = (countries) => ({
    type: types.GET_COUNTRIES,
    payload: countries,
})

const countryDeleted = () => ({
    type: types.DELETE_COUNTRIES
})

const countryAdded = () => ({
    type: types.ADD_COUNTRY
})

const countryUpdated = () => ({
    type: types.UPDATE_COUNTRY
})

const getCountry = (country) => ({
    type: types.GET_SINGLE_COUNTRY,
    payload: country
})

export const loadCountries = () => {
    return function (dispatch) {
        axios.get("http://localhost:8080/country").then((res) => {
            console.log(res)
            dispatch(getCountries(res.data))
        }).catch((err) => console.log(err))
    }
}

export const deleteCountries = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:8080/country/${id}`).then((res) => {
            console.log(res)
            dispatch(countryDeleted())
            dispatch(loadCountries())
        }).catch((err) => console.log(err))
    }
}

export const addCountry = (country) => {
    return function (dispatch) {
        axios.post("http://localhost:8080/country", country).then((res) => {
            console.log(res)
            dispatch(countryAdded())
            dispatch(loadCountries())
        }).catch((err) => console.log(err))
    }
}

export const getSingleCountries = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:8080/country/${id}`).then((res) => {
            console.log(res)
            dispatch(getCountry(res.data))
        }).catch((err) => console.log(err))
    }
}

export const updateCountry = (country, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:8080/country/${id}`).then((res) => {
            console.log(res)
            dispatch(countryUpdated())
        }).catch((err) => console.log(err))
    }
}