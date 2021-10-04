import React, { useContext, useRef } from "react";

import { FrutaContext } from "../context/index";

function Fruit() {
  const { handleAddFruta, inputFruta } = useContext(FrutaContext);

  return (
    <div>
      <input placeholder="Digite uma fruta" ref={inputFruta} />
      <button onClick={handleAddFruta}> Adicionar Fruta </button>
    </div>
  );
}

export default Fruit;

