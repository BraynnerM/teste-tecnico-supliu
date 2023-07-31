import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <Options>
      <div>
      <h3>        
        Por favor selecione uma das opções:
      </h3>
      <Links to={`/post`}>
        <Button>Adicionar uma Faixa ou Álbum</Button>        
      </Links>
      <Links to={`/delete`}>
        <Button>Apagar uma Faixa ou Álbum</Button>        
      </Links>
      </div>     

      <Links to={`/`}>
        <Button>Voltar para a Home</Button>
        
      </Links>
    </Options>
  )
}

export default Settings

const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
`

const Options = styled.div`
  width: 100%;
  height: 40rem;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  gap: 2rem;  
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
  margin: 1rem auto; 
  &:hover {
    cursor: pointer;
    background-color: #579dff; 
  }
  @media (max-width: 500px) {
    width: 20rem;
    font-size: 1.4rem;
  }
`

