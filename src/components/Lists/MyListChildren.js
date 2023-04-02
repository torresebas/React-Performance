// MEMO con propiedades children
import { memo } from "react";
import { isEqual } from "lodash";

const Li = memo(({ children }) => {
  // Aca {children} es un ['sebas', 'torres'] <- viene de cada input del form
  console.log(`renderizando ${children}: `, children);
  return <li>{children}</li>;
}, isEqual); // <-- isEqual se encarga de comparar las propiedades previas y las que vienen



const MyListChildren = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>
          {x.name}
          {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

export default memo(MyListChildren); //<--- tambien podemos poner memo aca o en ela funcion de arriba

//Esto pasa por que comparar dos [] en js da falso, asi sean iguales
// * []===[] false <- por eso hay que coparar propiedades y ...
//* elementos de los [], para ver si son iguales, es cambiar la
//* forma en que memo compara las propiedades, por eso usamos isEqual from lodash
