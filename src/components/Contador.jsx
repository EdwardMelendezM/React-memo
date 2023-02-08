import React, { useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const suma = () => setContador(contador + 1);
  const resta = () => setContador(contador - 1);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Contador</h3>
      <nav>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
      </nav>
      <h3>{contador}</h3>
      <ContadorHijo />
    </div>
  );
};

export default Contador;
