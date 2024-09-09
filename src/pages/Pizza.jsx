import React, { useState, useEffect } from 'react'

import ICON_PIZZA from '../assets/img/icon-pizza.png'
import ICON_CARRO from '../assets/img/carrito.png'
import { formatearValor } from '../utils/formatearMiles'

export const Pizza = () => {

    const[pizza, setPizza] = useState({});

    const consultarPizzaGeneral = async () =>{
        try{
            const url = `http://localhost:5000/api/pizzas/p001`;
            const response = await fetch(url);
            const pizza = await response.json();
      
            setPizza(pizza);
      
          }catch (error){
            console.error('Error Appi', error);
        }
    };

    useEffect(() => {
        consultarPizzaGeneral();
    }, []);

  return (
    <section className='section_pizza py-4'>
        <article className='article_pizza my-4 mt-5'>
            <div className='pizza_container-img'>
                <img src={pizza.img} alt="" />
            </div>
            <div className='pizza_container-text'>
                <h5 className="card_title"> Pizza {pizza.name} </h5>
                <p>{pizza.desc}</p>
                <p className="card_subtitle text-center"> 
                    <img className="icon_pizza" src={ ICON_PIZZA } alt="icono de pizza"/> Ingredientes:
                </p>
                {/* {props.ingredients.join(", ")}  */}
                <ul className="p-0 text-center">
                    {Array.isArray(pizza.ingredients) ? (
                        pizza.ingredients.map((item)=>(
                        <li className="card_ingredients-list" key={item}>{item}</li>
                    ))
                    ):(
                        <li>No hay ingredientes disponibles</li>
                    )}
                </ul>
                <p className="card_price text-center mb-4"> Precio: $ {formatearValor(pizza.price)}</p>
                <div className="card_buttons mb-3">
                    <button type="button" className="btn btn-dark" onClick={()=>onAddPizza(pizza)}>
                        Añadir
                        <img className="icon_carro p-0" src={ ICON_CARRO } alt="icono de carrito"/>
                    </button>
                </div>
            </div>
            
        </article>
    </section>
  )
}
