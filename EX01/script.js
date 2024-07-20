/*
2 - Agora desenvolva para adicionar a página HTML da questão anterior o seguinte: (1,5 pontos)

Uma função chamada "boasVindas" que será executada assim que carrega a página.
Essa função vai abrir um prompt com o campo "Por favor digite seu nome:"
Após digitar e sair do prompt tem que aparecer um alerta de boas vindas com o texto 
"Seja bem-vindo" e o nome digitado no prompt anterior.
*/

function boasVindas() {
  let nome = prompt("Por favor digite seu nome:");
  if (nome) {
    alert(`Seja bem-vindo, ${nome}!`);
  }
}
boasVindas();
