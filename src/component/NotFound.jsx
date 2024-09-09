import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='notfound' >
        <div className='notfound_container'>
            <h1 className='notfound_title'>404 - Página no encontrada</h1>
            <p className='notfound_subtitle mb-5'>Lo sentimos, la página que estas buscando no existe.</p>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    </div>
  )
}
