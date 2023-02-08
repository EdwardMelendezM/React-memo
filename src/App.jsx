import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h2>Teoria</h2>
      <h3>Uso de memo</h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>Lo vuelve a memorizar al momento de que sus props cambian</li>
        <li>Evita re-renderizados</li>
        <li>
          Hay que evitarlo en la medida de lo posible pues, podria ser mas
          costosa la tarea de memorizacion que el re-renderizado del componente
        </li>
        <li>Usalo cuando</li>
        <ul>
          <li>Tenemos muchos elementos renderizados en una lista</li>
          <li>Llamamos datos de Apis</li>
          <li>Un componente se vuelve mas pesado</li>
          <li>Salen alertas de rendimiento en la consola</li>
        </ul>
      </ul>
      <hr />
      <h3>useCallback</h3>
      <ul>
        <li>
          Memoriza una funcion, para que no vuelva a definir en cada render
        </li>
        <li>
          Usalo siempre que se pase una funcion como prop a un componente
          memorizado
        </li>
        <li>
          Usalo siempre que se pase una funcion como parametro de un efecto
        </li>
      </ul>
      <hr />
      <Contador />
      <h3></h3>
    </div>
  );
}

export default App;
