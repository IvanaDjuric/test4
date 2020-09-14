import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Countries from './Countries';
import {getAllCountries} from './services'
import Select from './Select'

const App = () => {
    const [countries,setCountries] = useState([])
    const [show,setShow]=useState(false)

    useEffect(() => {
        getAllCountries().then(res => {setCountries(res.data)
        })
      }, [])

    return(
        <>
            <Select setCountries={setCountries} setShow={setShow}/>
            <br></br>
            <Countries countries={countries} show={show}/>
        </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);