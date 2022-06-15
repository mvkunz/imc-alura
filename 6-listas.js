console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo =  `São Paulo`;
// const rioDeJaneiro =  `Rio de Janeiro`;

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); //adiciona o item no array.

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //o array inicia em 0 e não em 1.
console.log(listaDeDestinos);


console.log(listaDeDestinos[1]);