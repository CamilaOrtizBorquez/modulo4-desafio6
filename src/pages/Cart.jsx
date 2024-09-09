import React from 'react'
/* import { pizzaCart } from '../assets/js/pizzas' */
import { formatearValor } from '../utils/formatearMiles';
import { usePizzas } from '../context/PizzaContext';

export const Cart = () => {

  const {allPizzas, setAllPizzas, countPizzas, setCountPizzas, total, setTotal } = usePizzas(); 

  const onAddPizza=( product )=>{
    if(allPizzas.find(item => item.id === product.id)){

      const products = allPizzas.map(item => 
        item.id === product.id 
          ? {...item, quantity : item.quantity + 1, price : item.priceBase + product.price} 
          : item)
          setTotal(total + product.priceBase);
          setCountPizzas(countPizzas + product.quantity);
          
          return setAllPizzas([...products]); 
    }
  }

  const onEliminatePizza = ( product )=>{

    const filter=allPizzas.filter(item=>item.id!==product.id);

    if(allPizzas.find(item => item.id === product.id)){

      const products = allPizzas.map(item => 
        item.id === product.id 
          ? {...item, quantity : item.quantity - 1, price : product.price-item.priceBase} 
          : item)
          setTotal(total - product.priceBase);
          setCountPizzas(countPizzas - product.quantity);
          
          if(product.quantity<=1){
            return setAllPizzas([...filter]);
          }

          return setAllPizzas([...products]); 
    }
  }

  return (
  <div className="cart_section">
    <h1 className="cart_title mt-5">Carro de Compra</h1>
    <div className="cart_container">
      {allPizzas.map((pizza) => (
        <div className="cart_container-information" key={pizza.id}>
          <img src={pizza.img} className="cart_img"></img>
          <p className="cart_name w-25">Pizza {pizza.name}</p>

          <div className="cart_container-buttons">
            <button type="button" className="btn_more btn btn-dark" onClick={()=>onEliminatePizza (pizza)}>-</button>
            <p className='cart_buttons-total'>{pizza.quantity}</p>
            <button type="button" className="btn_less btn btn-dark" onClick={()=>onAddPizza (pizza)}>+</button>
          </div>

          <p className="cart_price w-25">$ {formatearValor(pizza.price)}</p>
        </div>
      ))}
        <div className="cart_container-total">
          <div className='cart_total-container'>
            <p className="cart_total">Total = $ {formatearValor(total)} </p>
            {allPizzas.length === 0 ? 
            <p className = "cart_vacio-text m-0 ">Carrito de compras vacio</p> : 
            <button type="button" className="btn_total btn btn-info w-75">Pagar</button> }
          </div>
        </div>
    </div>
  </div>
  )
}

export default Cart