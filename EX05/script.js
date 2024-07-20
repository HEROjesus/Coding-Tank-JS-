/*5 - Em um bingo eu tenho uma cartela com os números 11, 28, 35, 74, 26 e 17.(2 pontos) 
 Desenvolva uma função que sorteie números aleatórios entre 1 e 75 
  até serem sorteados todos os números da cartela.
 Após sortear toda a cartela exibe no console a frase "Parabéns, você ganhou!"*/

function bingoSimples() {
  const numerosCartela = [11, 28, 35, 74, 26, 17];
  const numerosSorteados = [];

  function sortearNumero() {
    return Math.floor(Math.random() * 75) + 1;
  }

  while (numerosSorteados.length < numerosCartela.length) {
    let numeroSorteado = sortearNumero();

    if (numerosCartela.includes(numeroSorteado)) {
      if (!numerosSorteados.includes(numeroSorteado)) {
        numerosSorteados.push(numeroSorteado);
        console.log(`Número sorteado: ${numeroSorteado}`);
      }
    }
  }
  console.log("Parabéns, você ganhou!");
}

bingoSimples();
