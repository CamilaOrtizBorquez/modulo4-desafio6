import React from 'react'

export const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile_container'>
            <h1 className='profile_title mb-5'>Profile</h1>
            <p className='profile_name'><span>Usuario:</span> Camila Ortiz</p>
            <p className='profile_email'><span>Email:</span> ortiz.camilafernanda@gmail.com</p>
            <button type="button" class="btn btn-info mt-5">Cerrar Sesión</button>
        </div>
    </div>
  )
}
