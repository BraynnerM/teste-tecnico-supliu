import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import NewDelete from '../components/Delete'

const Delete = () => {
  return (
    <>    
    <NewDelete />
    <Links to={`/settings`}>
        <Button>
          Voltar para a página anterior
    </Button>
    </Links>
    <Links to={`/`}>
        <Button>
          Voltar para a Home          
        </Button>
    </Links>
    </>
  )
}

export default Delete

const Links = styled(Link)`
  text-decoration: none;
  margin-left: 35%; 
`

const Button = styled.p`
  text-align: center; 
  line-height: 6rem; 
  width: 35rem;  
  border: none;
  background-color: #3b8cff;
  color: #FFFFFF;
  height: 6rem;    
  border-radius: 3rem;
  font-size: 1.9rem;
  transition: 0.3s ease-in-out;
  margin-top: 5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #579dff; 
  }
`