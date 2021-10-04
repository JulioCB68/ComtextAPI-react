import React, { useState, createContext, useRef } from "react";

export const FrutaContext = createContext();

export const FrutaProvider = ({ children }) => {

  const inputFruta = useRef();

  const [frutas, setFrutas] = useState([
    { id: 1, fruta: "Banana" },
    { id: 2, fruta: "Maçã" },
    { id: 3, fruta: "Laranja" },
    { id: 4, fruta: "Goiaba" },
    { id: 5, fruta: "Manga" },
  ]);

  const handleAddFruta = () => { 
    const InputValue = inputFruta.current;
    setFrutas([
      ...frutas,
      {
        id: frutas.length + 1,
        fruta: InputValue.value,
      },
    ]);
  }

  const handleDeleteFruta = (id) => {
    const Newfrutas = frutas.filter((fruta) => {
      return fruta.id !== id;
    });
    setFrutas(Newfrutas);
    console.log(Newfrutas);
  }

  return (
    <FrutaContext.Provider value={{ frutas, setFrutas, handleAddFruta, handleDeleteFruta, inputFruta}}>
      {children}
    </FrutaContext.Provider>
  );
};

export default FrutaProvider;