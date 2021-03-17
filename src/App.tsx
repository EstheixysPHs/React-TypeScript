

import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from './components/ContadorRed';

import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

import { DataProvider } from './contex/DataContex';


import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { BotonCambiarData } from "./components/BotonCambiarData";

 
function App() {
 
  return (
    <>
      <h1> React + TypeScript </h1>
      <hr/>
      
      <h2>useState</h2>
      <Counter />

      <Usuario />

      <h2>useEffec - useRef</h2>
      <hr/>
       
       <TimerPadre />

      <h2>useReducer</h2>
      <hr/>

      <ContadorRed />



      <h2>customHooks</h2>
      <hr/>
      
      <Formulario />

      <br/>

      <Formulario2 />

      <br/>

      <h2>React: Context Api</h2>
      <hr/>
      <DataProvider> 
        <div className="container">

        <Pagina1  />
        <Pagina2   />
        <BotonCambiarData />

        </div>
    </DataProvider>
    </>
  );
}

export default App;
