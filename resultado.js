let resultado = document.getElementById("resultado");
let saida = "";

for (let i = 0; i < nomes.length; i++) {
  saida += `${nomes[i]} - Nota: ${notas[i]} - ${situacoes[i]}<br>`;
}

resultado.innerHTML = `
${saida}
<br>
Média da turma: ${media.toFixed(2)}
`;
