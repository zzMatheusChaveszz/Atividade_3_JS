let frutas = [];

for (let i = 0; i < 5; i++) {
  let fruta = prompt("Escolha 5 frutas").trim();
  fruta = fruta.replace(" ", "");
  fruta = fruta.toLowerCase();
  frutas.push(fruta);
}

for (let fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
  console.log(`Quantidade de letras: ${fruta.length}`);
  console.log(`Primeiros 3 caracteres: ${fruta.substring(0, 3)}`);
  console.log(`-------------------------------`);
}

