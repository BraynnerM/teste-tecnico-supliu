import React, { useEffect, useState } from 'react'
import apiFetch from '../../services/config'
import { useNavigate } from 'react-router-dom'

import './index.css'

const NewPost = () => {
    const navigate = useNavigate()

    const [albunsList, setAlbunsList] = useState([])    
    const [name, setName] = useState()    
    const [year, setYear] = useState()    
    const [album_id, setAlbum_id] = useState()    
    const [number, setNumber] = useState()    
    const [title, setTitle] = useState()    
    const [duration, setDuration] = useState()

    const createAlbumPost = async (e) => {
        e.preventDefault();
        const albumPost = {name, year}
        await apiFetch.post("/album", albumPost)

        navigate('/')
    }

    const createTrackPost = async (e) => {
        e.preventDefault();
        const trackPost = {album_id, number, title, duration}
        await apiFetch.post("/track", trackPost)

        navigate('/')
    }

    const getAlbunsList = async () => {

        try {

            const response = await apiFetch.get(`/album`)
            const data = response.data
            setAlbunsList(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAlbunsList()
    }, [])

    return (
        <div className='container-new-post'>
            <div>
                <div className='new-post'>
                    <form onSubmit={(e) => createAlbumPost(e)}>
                        <h2>Novo Album:</h2>
                        <div className='form-control'>
                            <label htmlFor="name"></label>
                            <input type="text" name='name' id='name' placeholder='Nome do Álbum' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="year"></label>
                            <input type='text' name='year' id='year' placeholder='Ano do Álbum' onChange={(e) => setYear(e.target.value)}/>
                        </div>

                        <input type='submit' value="Cadastrar Álbum" className='submit-button' />
                    </form>
                </div>
                <div className='new-post'>
                    <form onSubmit={(e) => createTrackPost(e)}>
                        <h2>Nova música:</h2>
                        <div className='form-control'>
                            <label htmlFor="album_id"></label>
                            <input type="number" name='album_id' id='album_id' placeholder='Id do Álbum' onChange={(e) => setAlbum_id(e.target.value)}/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor="number"></label>
                            <input type="number" name='number' id='number' placeholder='Número da Faixa' onChange={(e) => setNumber(e.target.value)}/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor="title"></label>
                            <input type="text" name='title' id='title' placeholder='Nome da música' onChange={(e) => setTitle(e.target.value)}/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor="duration"></label>
                            <input type="number" name='duration' id='duration' placeholder='Duração em segundos' onChange={(e) => setDuration(e.target.value)}/>
                        </div>

                        <input type='submit' value="Cadastrar Música" className='submit-button' />
                    </form>
                </div>
            </div>
            <div>
                <ul className='album-id-list'>Id's dos Álbuns cadastrados:</ul>
                {albunsList.map((album, index) => {
                    return <li key={index}>{album.id} - {album.name}</li>
                })}
            </div>
        </div>
    )
}

export default NewPost