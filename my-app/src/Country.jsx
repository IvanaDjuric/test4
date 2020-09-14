import React from 'react'

export const Country = ({country}) => {

    return (
        <div>
            <img style={{width:`150px`}} src={country.flag} alt='' />
        </div>
    )
}

export default Country