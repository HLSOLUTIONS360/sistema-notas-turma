for (let i = 0; i < notas.length; i++) {
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
