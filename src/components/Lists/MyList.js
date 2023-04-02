import { memo } from "react";

// * Sin memo 
// const Li = ({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// };


// * Con memo 
const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`);
  return <li>{fullname}</li>;
});



const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
      ))}
    </ul>
  );
};

export default MyList;
