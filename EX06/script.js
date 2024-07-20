/*Pedro é da turma A e tem 14 anos,
Maria é da turma A e tem 12 anos,
Michel é da turma A e tem 13 anos, 
Marcos é da turma B e tem 15 anos, 
Ana é da turma B e tem 11 anos, 
Bruno é da turma B e tem 10 anos.
Baseado nesses objetos desenvolva as seguintes funções: (2 pontos)

Uma função que me retorne o nome e idade do aluno mais velho da turma A
Uma função que me retorne a média de idade de todos os alunos.*/
// Definindo um array de objetos para representar os alunos
let alunos = [
  { nome: "Pedro", turma: "A", idade: 14 },
  { nome: "Maria", turma: "A", idade: 12 },
  { nome: "Michel", turma: "A", idade: 13 },
  { nome: "Marcos", turma: "B", idade: 15 },
  { nome: "Ana", turma: "B", idade: 11 },
  { nome: "Bruno", turma: "B", idade: 10 },
];

function alunoMaisVelhoTurmaA() {
  let alunoMaisVelho = { idade: 0 };

  for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    if (aluno.turma === "A" && aluno.idade > alunoMaisVelho.idade) {
      alunoMaisVelho = aluno;
    }
  }

  return `Aluno mais velho da turma A: ${alunoMaisVelho.nome}, ${alunoMaisVelho.idade} anos`;
}

function mediaIdadeAlunos() {
  let somaIdades = 0;

  for (let i = 0; i < alunos.length; i++) {
    somaIdades += alunos[i].idade;
  }

  let media = somaIdades / alunos.length;

  return `Média de idade dos alunos: ${media} anos`;
}

console.log(alunoMaisVelhoTurmaA());
console.log(mediaIdadeAlunos());