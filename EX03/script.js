/*3 - Em um concurso publico a nota mínima para ser aprovado é 8.
 Desenvolva uma função javascript em que eu preencha o meu nome,
  a minha nota e eu tenha o retorno os seguintes retornos no console: (1,5 pontos)

Se a nota for igual ou maior que 8 "Parabéns NOME, você foi aprovado!"
Senão "Olá NOME! Infelizmente você foi reprovado."
Quero também uma validação para o caso do usuário não preencher um número. */

function concursoPublico() {
  let MeuNome = prompt("Por favor, preencha o campo com seu nome:");
  let Nota1 = Number(prompt("Por favor, preencha o campo com sua nota:"));
  if (isNaN(Nota1)) {
    console.log("Por favor, insira um número válido para a nota.");
    return;
  }
  if (Nota1 >= 8) {
    console.log(`Parabéns ${MeuNome}, você foi aprovado!`);
  } else {
    console.log(`Olá ${MeuNome}! Infelizmente você foi reprovado.`);
  }
}
concursoPublico();
