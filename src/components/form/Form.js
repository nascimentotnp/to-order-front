import Button from "../button";
import "./Form.css";
import React, { useEffect, useState } from "react";
import request from "../../request/request";
import { useParams } from "react-router-dom";

function Formulary() {
  let { id } = useParams();
  const [pizza, setPizza] = useState({
    name: "",
    price: "",
    filling: "",
    size: "",
    stuffed_pizza_edge: "" ,
    flavor_stuffed_pizza_edge: ""
  });
  const [pasta, setPasta] = useState({
    name: "",
    price: "",
    filling: "",
    pasta_type: "",
    sauce_type: ""
  });
  const [isPizza, setIsPizza] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [oncePizza, setOncePizza] = useState({});

  useEffect(()=>{
    getPizzaById()
  }, [])

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    if (isPizza) {
      setPizza((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    } else {
      setPasta((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {};
      let url = "";
      if (isPizza) {
        payload = {
          ...pizza,
          stuffed_pizza_edge: pizza.stuffed_pizza_edge === "true",
        };
        url = "/pizza";
      } else {
        payload = {
          ...pasta,
        };
        url = "/pasta";
      }
      const errors = {};
      Object.keys(payload).forEach((key) => {
        if (!payload[key]) {
          errors[key] = "Este campo é obrigatório";
        }
      });
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        const response = await request({
          method: "POST",
          url: url,
          data: payload,
        });
        console.log("Resposta da solicitação:", response.data);
      } else {
        console.error("Há campos obrigatórios não preenchidos");
      }
    } catch (error) {
      console.error("Erro ao fazer solicitação POST:", error);
    }
  };

  const getPizzaById = async (id) => {
    try {
      const response = await request({
        method: "get",
        url: `/pizza${id}`,
      });
      console.log("Dados da pizza:", response.data);
      setOncePizza(response.data);
    } catch (error) {
      console.error("Erro ao buscar pizza:", error);
    }
  };

  const getPastaById = async (pastaId) => {
    try {
      const response = await request({
        method: "get",
        url: `/pasta${id}`,
      });
      console.log("Dados da Pasta:", response.data);
      setOncePasta(response.data);
    } catch (error) {
      console.error("Erro ao buscar pasta:", error);
    }
  };

  return (
    <container>
      <form onSubmit={handleSubmit} id="pizzaForm">
        <h1>Coccina DiTrento</h1>
        <label className="centered-letter pt-5 ditrento-brand span"  htmlFor="foodType"><span>Di</span>Tren<span>to</span></label>
        <select className="centered-letter"  id="foodType" onChange={() => setIsPizza(!isPizza)}>
          <option value="Seleção">Selecione entre Pizza e Massa</option>
          <option value="pizza">Pizza</option>
          <option value="massa">Massa</option>
        </select>
        {isPizza ? (
          <>
            <div className="label-input-container">
            <label className="centered-letter" htmlFor="pizzaName"/>
            <input className="centered-letter"
              placeholder="Nome"
              type="text"
              id="pizzaName"
              required
              name="name"
              value={pizza.name}
              onChange={handleChange}
            />
            <label className="centered-letter" htmlFor="pizzaPrice"></label>
            <input className="centered-letter"
              placeholder="Preço"
              type="text"
              id="pizzaPrice"
              step="0.01"
              required
              name="price"
              value={pizza.price}
              onChange={handleChange}
            />
            <label className="centered-letter" htmlFor="pizzaFilling"></label>
            <input className="centered-letter"
            placeholder="Sabores"
              type="text"
              id="pizzaFilling"
              required
              name="filling"
              value={pizza.filling}
              onChange={handleChange}
            />
            <div id="pizzaOptions">
              <label className="centered-letter" htmlFor="pizzaSize"></label>
              <select className="centered-letter"
                id="pizzaSize"
                required
                name="size"
                value={pizza.size}
                onChange={handleChange}
              >
                <option value="">Escolha o Tamanho</option>
                <option value="Pequena">Pequena</option>
                <option value="Média">Média</option>
                <option value="Grande">Grande</option>
                <option value="Gigante">Gigante</option>
              </select>
              <label className="centered-letter" htmlFor="stuffedCrust"></label>
              <select className="centered-letter"
                id="stuffedCrust"
                required
                name="stuffed_pizza_edge"
                value={pizza.stuffed_pizza_edge}
                onChange={handleChange}
              >
                <option value="">Quer Borda Recheada?</option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
              {pizza.stuffed_pizza_edge === "true" && (
                <div id="crustFlavorOptions">
                  <label htmlFor="crustFlavor"></label>
                  <select
                  className="centered-letter"
                    id="crustFlavor"
                    name="flavor_stuffed_pizza_edge"
                    value={pizza.flavor_stuffed_pizza_edge}
                    onChange={handleChange}
                  >
                    <option value="">Sabor da Borda</option>
                    <option value="creamCheese">Cream Cheese</option>
                    <option value="catupiry">Catupiry</option>
                    <option value="cheddar">Cheddar</option>
                  </select>
                </div>
              )}
            </div>
            </div>
          </>
        ) : (
          <>
            <div className="label-input-container">
            <label htmlFor="pastaName">Nome:</label>
            <input
              type="text"
              id="pastaName"
              required
              name="name"
              value={pasta.name}
              onChange={handleChange}
            />
            <label htmlFor="pastaPrice">Preço:</label>
            <input
              type="number"
              id="pastaPrice"
              step="0.01"
              required
              name="price"
              value={pasta.price}
              onChange={handleChange}
            />
            <label htmlFor="pastaFilling">Recheio:</label>
            <input
              type="text"
              id="pastaFilling"
              required
              name="filling"
              value={pasta.filling}
              onChange={handleChange}
            />
            <label htmlFor="pastaType">Tipo:</label>
            <select
              id="pastaType"
              required
              name="pasta_type"
              value={pasta.pasta_type}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="spaghetti">Spaghetti</option>
              <option value="penne">Penne</option>
              <option value="fusilli">Fusilli</option>
              <option value="lasagna">Lasagna</option>
            </select>
            <label htmlFor="sauceType">Molho:</label>
            <select
              id="sauceType"
              required
              name="sauce_type"
              value={pasta.sauce_type}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="bolonhesa">Bolonhesa</option>
              <option value="quatroQueijos">Quatro Queijos</option>
              <option value="alhoEOleo">Alho e Óleo</option>
              <option value="molhoBranco">Molho Branco</option>
              <option value="naManteiga">Na Manteiga</option>
            </select>
            </div>
          </>
        )}
<div className="centered-button">
  <Button>Cadastrar</Button>
</div>      </form>
    </container>
  );
}
export default Formulary;
