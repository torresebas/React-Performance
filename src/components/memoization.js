//Fn de Memoizacion

// Es solo un ejemplo
//? No implementar

const memo = (fn) => {
  const memory = {};

  return (a) => {
    if (memory[a]) {
      console.log("Sacado de la memoria");
      return memory[a];
    }

    console.log("Computo");
    memory[a] = fn(a);
    return memory[a];
  };
};

const fn = memo((iterator) => {
  let total = 1;
  for (let i = 0; i < iterator; i++) {
    total = total * iterator;
  }

  return total;
});

console.time("sin memo");
fn(5000000);
fn(5010000);
fn(5020000);
fn(5030000);
fn(5040000);
console.timeEnd("sin memo");

console.time("con memo");
fn(5000000);
fn(5010000);
fn(5020000);
fn(5030000);
fn(5040000);
console.timeEnd("con memo");


// Computo
// Computo
// Computo
// Computo
// Computo
// sin memo: 47.323ms
// Sacado de la memoria
// Sacado de la memoria
// Sacado de la memoria
// Sacado de la memoria
// Sacado de la memoria
// con memo: 0.188ms