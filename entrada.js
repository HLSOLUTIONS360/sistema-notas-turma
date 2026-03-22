quantidade = Number(prompt("Quantos alunos deseja cadastrar?"));

for (let i = 0; i < quantidade; i++) {
  let nome = prompt("Digite o nome do aluno");
  let nota = Number(prompt("Digite a nota do aluno"));

  nomes.push(nome);
  notas.push(nota);
}
