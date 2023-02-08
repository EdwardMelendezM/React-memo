import React, { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  //const suma = () => setContador(contador + 1);
  const suma = useCallback(() => setContador(contador + 1), [contador]);
  const resta = useCallback(() => setContador(contador - 1), [contador]);
  //const resta = () => setContador(contador - 1);
  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Contador</h3>
      <nav>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} suma={suma} resta={resta} />
    </div>
  );
};

export default Contador;
