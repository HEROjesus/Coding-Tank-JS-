/*
4 - Desenvolva uma função que escreva no console de 
1 a 100 e a cada 5 números escreva a palavra Ada.
(1,5 pontos)*/

function escreverNumerosComAda() {
  let contador = 0;

  for (let i = 1; i <= 100; i++) {
    contador++;
    if (contador === 5) {
      console.log("Ada");
      contador = 0;
    } else {
      console.log(i);
    }
  }
}

escreverNumerosComAda();
