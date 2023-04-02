import { useCallback, useMemo, useState } from "react";
import Title from "./components/Title";
import MyForm from "./components/Forms/MyForm";
import MyList from "./components/Lists/MyList";
import MyListChildren from "./components/Lists/MyListChildren";
import MyFormMemo from "./components/Forms/MyFormMemo";

function App() {
  const [valores, setValores] = useState([]);

  //* cada vez que se ejecuta App.js le asignamos una nueva
  //* funcion a handleSubmit, por lo que la
  //* propiedad { onSubmit } siempre esta cambiando.

  //* debemos asegurar que la funcion handleSubmit siempre sea la misma,
  //* es decir siempre sea la misma instancia

  // ! Siempre que llamamos el componente App.js
  // ! la funcion handleSubmit se vuelve a recrear una y otra vez, y siempre
  // ! hace lo mismo.
  // ! lo que se debe hacer es crear un hook (useCallback) que siempre devuelva la misma
  // ! instancia de la fn handleSubmit

  // * Sin useCallback
  // const handleSubmit = (values) => {
  //   setValores([...valores, values]);
  // };

  // * Con useCallback
  const handleSubmit = useCallback((values) => {
    // *()=>() con un acercamiento funcional para evitar
    //* errores de dependecias

    // * data es igual que valores, solo se cambio el nombre para que no choquen
    setValores((data) => [...data, values]);
  }, []);




  const iterator = 50000000;
  console.time("Memo");
  const memoized = useMemo(() => {
    let total = 0;
    for (let i = 0; i < iterator; i++) {
      total = total * iterator;
    }
    return total;
  }, [iterator]);
  console.timeEnd("Memo");



  
  return (
    <div>
      <Title>Mi título</Title>
      {/* MEMOIZANDO EL FORM (MEMO + USECALLBACK)*/}
      <MyFormMemo onSubmit={handleSubmit} />

      {/* Sin Memoizacion */}
      {/* <MyForm onSubmit={handleSubmit} /> */}

      {/* EJEMPLO MEMO */}
      {/* <MyList data={valores} /> */}

      {/* EJEMPLO MEME CON PROP CHILDREN */}
      <MyListChildren data={valores} />
    </div>
  );
}

export default App;

//? useCallback =>
//? Es una fn (Hook) de memoizacion que recuerda la fn y si
//? es la misma devuelve la misma instancia y no nos
//? devuelve una nueva instancia, es decir handleSubmit
//? va a ser siempre el mismo
