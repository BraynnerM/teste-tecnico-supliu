import React from 'react'
import { useState } from 'react'
import InputSearch from '../components/InputSearch'
import Albuns from '../components/Albuns'

const Home = () => {
    const [results, setResults] = useState([]);      
    return (
    <>
    <InputSearch setResults={setResults} />
    <Albuns results={results}/>
    </>
    )
}

export default Home