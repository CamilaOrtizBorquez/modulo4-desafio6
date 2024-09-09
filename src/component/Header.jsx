import React from 'react'
import IMG_HEADER from '../assets/img/pizza-9.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_container'>
        <img className='header_img' src={IMG_HEADER} alt="" />
        <div className='header_container-text'>
          <h1 className='header_title'>¡Pizzeria Mamma Mia!</h1>
          <h3 className='header_subtitle'>Tenemos las mejores pizzas que podrás encontrar</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
