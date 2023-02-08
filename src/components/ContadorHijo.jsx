import { memo, useMemo } from "react";
const ContadorHijo = ({ contador }) => {
  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 100000000; i++) {
      numero++;
    }
    return numero;
  }, []);
  console.log("Hijo contador se renderiza");
  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h3>Contador hijo</h3>
      <h3>{contador}</h3>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
