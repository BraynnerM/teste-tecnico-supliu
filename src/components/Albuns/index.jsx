import React from 'react'

import './index.css'

const Albuns = ({ results }) => {
  
  function formatSecondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <>    
      {results.map((result, id) => (
        <table className='album' key={id}>
          <thead>
            <tr>
              <td className='album-nome'>
                Álbum: 
              </td>
              <td className='album-nome'>
                {result.name}, {result.year}
              </td>
            </tr>
            <tr className='album-faixa'>
              <td className='number' >                
              Nº
              </td>
              <td className='title'>  
              Faixa
              </td>
              <td>  
              Duração
              </td>
            </tr>
          </thead>
          <tbody>
          {result.tracks.map((track, id) => (            
              <tr className='album-faixa' key={id}>
                <td>
                <p>{track.number}</p>
                </td>
                <td>
                <p>{track.title}</p>                
                </td>
                <td>                
                  <p> {formatSecondsToMinutesAndSeconds(track.duration)} </p>                
                </td>
              </tr>            
          ))}
          </tbody>
        </table>
      ))}
    </>
  )
}

export default Albuns