import React, { useState, useEffect } from "react";
import "./Pasta.css";
import request from "../../request/request";

function Pasta() {
  const [pasta, setPasta] = useState([]);

  useEffect(() => {
    getPasta();
  }, []);

    
  const getPasta = async () => {
    try {
      const response = await request({
        method: "get",
        url: "/pasta",
      });
      console.log("Dados da pasta:", response.data);
      setPasta(response.data);
    } catch (error) {
      console.error("Erro ao buscar pasta:", error);
    }
  };
  

  return (
    <section className='pasta'>
      <div>
        <h2>Lista de Pastas</h2>
        <ul>
          {pasta.map(pasta => (
            <li key={pasta.id}>
              <strong>Sabor:</strong> {pasta.name} -
              <strong>Macarrão:</strong> {pasta.pasta_type} - <strong>Preço:</strong> {pasta.price}  
              <a href = {`../${pasta.id}`} >Editar</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pasta;
