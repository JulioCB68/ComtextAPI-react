import React, { useContext } from "react";

import { FrutaContext } from "../context/index";

function Fruta() {
  const { frutas, setFrutas, handleDeleteFruta } = useContext(FrutaContext);

  return (
    <div>
      {frutas.map((fruta) => (
        <div key={fruta.id}>
          <p> {fruta.id} {fruta.fruta} </p>
          <button onClick={() => {handleDeleteFruta(fruta.id)}}> Deletar Fruta </button>
        </div>
      ))}
    </div>
  );
}

export default Fruta;
