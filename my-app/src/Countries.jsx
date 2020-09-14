import React from 'react'

const Countries =({countries,filter}) => {
    const formatOutput = () => {
        let output = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

        return output
    }

    return (
        <>
        {formatOutput()}
        </>
    )
}
export default Countries