import axios from 'axios'

export const getAllCountries = () => {
    return axios.get('https://restcountries.eu/rest/v2/all')
}

export const getByRegion = () => {
    return axios.get('https://restcountries.eu/rest/v2/regionalbloc/eu')
}