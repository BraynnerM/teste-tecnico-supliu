import React from 'react'
import { Link } from 'react-router-dom'
import NewPost from '../components/Post'
import { styled } from 'styled-components'

const Post = () => {
  return (
    <>
    <NewPost />
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

export default Post

const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
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
    font-size: 1.5rem;
  }
`