import React from 'react'
import { Link } from 'react-router-dom'
const Delete = () => {
  return (
    <>
    <div>Delete</div>
    <Link to={`/settings`}>
        Voltar para a página anterior
    </Link>
    <Link to={`/`}>
        Voltar para a Home
    </Link>
    </>
  )
}

export default Delete