<<<<<<< Updated upstream
for (let i = 0; i < notas.length; i++) {

for (let i = 0; I < notas.length; i++) {
>>>>>>> Stashed changes
    soma += notas[i];
    if(notas[i] >= 7) {
    
        situacoes.push("Aprovado");
    } else if (notas[i] >= 5) {
        situacoes.push("Recuperação");
    } else {
        situacoes.push("Reprovado");
    }   
}
media = soma / notas.length;
