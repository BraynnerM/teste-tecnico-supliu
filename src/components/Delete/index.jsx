import React from 'react'
import apiFetch from '../../services/config'
import { useState, useEffect } from 'react'

import "./index.css"

const NewDelete = () => {

    const [albunsList, setAlbunsList] = useState([])    
    const [deleteMessage, setDeleteMessage] = useState()    
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
    

    const removeAlbum = async (id) => {
        try {
            const response = await apiFetch.delete(`/album/${id}`)
            const data = response.data            
            if (data === true) {
                setAlbunsList(albunsList.filter((album) => album.id !== id))
                setDeleteMessage('Remoção de Álbum realizada com sucesso!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeTrack = async (id) => {
        try {
            const response = await apiFetch.delete(`/track/${id}`)
            const data = response.data            
            if (data === true) { 
                setAlbunsList(albunsList.map((album) => {
                    return {
                      ...album,
                      tracks: album.tracks.filter((track) => track.id !== id)
                    };
                  }));
                  
                setDeleteMessage('Remoção de Música realizada com sucesso!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <p className='delete-message'>{deleteMessage}</p>
            <div className='cards-list'>                
                {
                    albunsList.map((album, id) => {
                        return (
                            <div className='card' key={id}>
                                <h2> Album: {album.name}</h2>
                                <p>Ano: {album.year}</p>
                                <button className='delete-button' onClick={() => removeAlbum(album.id)}>Apagar Álbum</button>
                                {album.tracks.map((track, id) => {
                                    return (
                                        <div key={id}>
                                            <p>{track.title}</p>
                                            <button className='delete-button' onClick={() => removeTrack(track.id)}>Apagar Música</button>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }                
            </div>
        </>
    )
}

export default NewDelete