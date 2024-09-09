import React from 'react'
import ICON_CARRO from '../assets/img/carrito.png'
import ICON_PIZZA from '../assets/img/icon-pizza.png'
import ICON_EYES from '../assets/img/eyes.png'
import { formatearValor } from '../utils/formatearMiles'
import { Link } from 'react-router-dom'
import { usePizzas } from '../context/PizzaContext'

const CardPizza = ({pizza}) => {

  const {allPizzas, setAllPizzas, countPizzas, setCountPizzas, total, setTotal } = usePizzas();
  const {name, price, ingredients, img} = pizza;

  const onAddPizza=( product )=>{

    if(allPizzas.find(item => item.id === product.id)){

      const products = allPizzas.map(item => 
        item.id === product.id 
          ? {...item, quantity : item.quantity + 1, price : item.price + product.price} 
          : item)

          setTotal(total + product.price * product.quantity);
          setCountPizzas(countPizzas + product.quantity);
          return setAllPizzas([...products]); 
    }

      setTotal(total + product.price * product.quantity);
      setCountPizzas(countPizzas + product.quantity);
      setAllPizzas([...allPizzas, product])
  };


  return (
      <div className="cards col-4">
        <div className="card px-0">
          <img src= {img} className="card-img-top" alt="..."/>
          <div className="card-body p-0">
            <h5 className="card_title"> Pizza {name} </h5>
            <p className="card_subtitle text-center"> Ingredientes:</p>
            <div className="card_ingredients text-center"> 
              <img className="icon_pizza" src={ ICON_PIZZA } alt="icono de pizza"/> 
              {/* {props.ingredients.join(", ")}  */}
              <ul className="p-0">
                  {ingredients.map((item)=>(
                    <li className="card_ingredients-list" key={item}>{item}</li>
                  ))}
              </ul>
            </div>
            <p className="card_price text-center mb-4"> Precio: $ {formatearValor(price)}</p>
            <div className="card_buttons mb-3">
              <Link to="/pizza/p001" type="button" className="btn btn-outline-dark">
                Ver más
                <img className="icon_eyes" src={ ICON_EYES } alt="icono de ojos"/> 
              </Link>
              <button type="button" className="btn btn-dark" onClick={()=>onAddPizza(pizza)}>
                Añadir
                <img className="icon_carro p-0" src={ ICON_CARRO } alt="icono de carrito"/>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardPizza
