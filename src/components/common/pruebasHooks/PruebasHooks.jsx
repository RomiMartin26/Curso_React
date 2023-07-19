//rafce exporta por defecto
//useState
// const [elemento, modificadorElemento] = useState()

//useEffect es un Hooks que permite cargar cuando un componente se monta por primera vez si se deja vacio
// si yo quiero que se este montando ante algun cambio, tengo que dejar que escuche alguna variable y se define en el arreglo []
import React from "react";
import { useState, useEffect } from "react";

const PruebasHooks = ({ contador, setContador }) => {

  let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [img, setImg] = useState("");

  useEffect(() => {
    // console.log("setImg",arr[contador]);
    setImg(arr[contador]);
  }, [contador]);

  return (
    <div>
      <h4>{contador}</h4>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>

      {/* <button onClick={()=> setImg("https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}>Traer imagen</button> */}

      <img src={img} alt="" />
    </div>
  );
};

export default PruebasHooks;
