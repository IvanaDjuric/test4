import React, { useState, useEffect } from 'react'
import { getAllCountries } from './services'


const Select = ({setCountries,setShow}) => {
const [value,setValue] = useState('')

useEffect(() => {
    value !== '' ?
    getByRegion(value).then(res => {
        setCountries(res.data)
    })
    :
    getAllCountries(value).then(res => {
        setCountries(res.data)
    })
},[value])

return (
    <select 
    value={value}
    onChange={(e) => {setValue(e.target.value)
    setShow(true)
    }}>
        <option disabled='disabled' default={true} value={''}>Choose Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>

    </select>
) 
}
export default Select