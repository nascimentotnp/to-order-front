import React, { useState, useEffect } from "react";
import "./Pizza.css";
import request from "../../request/request";

function Pizza() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getPizza();
  }, []);

    
  const getPizza = async () => {
    try {
      const response = await request({
        method: "get",
        url: "/pizza",
      });
      console.log("Dados da pizza:", response.data);
      setPizza(response.data);
    } catch (error) {
      console.error("Erro ao buscar pizza:", error);
    }
  };
  

  return (
    <section className='pizza'>
      <div>
        <h2>Lista de Pizzas</h2>
        <ul>
          {pizza.map(pizza => (
            <li key={pizza.id}>
              <strong>Sabor:</strong> {pizza.name} - <strong>Tamanho:</strong> {pizza.size} - 
              <strong>Borda Recheada:</strong> {pizza.flavor_stuffed_pizza_edge} <strong>Preço:</strong> {pizza.price} 
              <a href = {`../${pizza.id}`} >Editar</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pizza;
