import React, { useState, useEffect} from 'react'
import Header from '../component/Header'
import CardPizza from '../component/CardPizza'

import {pizzaCart} from '../assets/js/pizzas'

export const Home = () => {

  const[pizza, setPizza] = useState([]);

  useEffect(() =>{
    consultarPizzas();

  },[])

  const consultarPizzas = async() => {
    try{
      const url = `http://localhost:5000/api/pizzas`;
      const response = await fetch(url);
      const resultado = await response.json();

      setPizza([...resultado]);

    }catch (error){
      throw error;
    }
  }

  return (
    <div>
      <Header></Header>

      <div className="container_cards py-5">
        <div className="container_cards-pizzas row mt-4 g-5">
          {pizza.map (pizza => (
              <CardPizza
                key= {pizza.id}
                pizza={pizza}
                // allPizzas={allPizzas}
                // setAllPizzas={setAllPizzas}
                // countPizzas={countPizzas}
                // setCountPizzas={setCountPizzas}
                // total={total}
                // setTotal={setTotal}
              />
          ))}

          {/* <CardPizza
            name="Napolitana"
            price={6950}
            ingredients={["mozzarella", "tomate" , "jamón" ,"orégano "]}
            img={ PIZZA_NAPOLITANA }
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano" , "provolone"]}
            img={ PIZZA_ESPAÑOLA }
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img= { PIZZA_PEPERONI}
          /> */}
        </div>
      </div>
    </div>
  )
}


export default Home