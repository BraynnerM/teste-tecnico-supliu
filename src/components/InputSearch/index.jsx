import React from 'react'
import { useState } from 'react'
import apiFetch from '../../services/config'

import './index.css'

const InputSearch = ({setResults}) => {   
  const [searchTerm, setSearchTerm] = useState([""])  
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  }

  const getResults = async () => {    

    try {

      const response = await apiFetch.get(`/album?keyword=${searchTerm}&limit=10&page=1`)      
      const data = response.data
      setResults(data.data)
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <div className='input-search'>
      <p>Digite uma palavra chave</p>
      <div className='input-interface'>      
        <input 
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        />
        <button onClick={() => getResults()}>
          Procurar
        </button>
      </div>
    </div>
  )
}

export default InputSearch