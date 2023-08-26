let montante
let taxa = 0.10
let tempo = 2
let capital = 4000

montante = capital * (1 + taxa) ** tempo

console.log(`seu montante depois de ${tempo} meses é de ${montante}`)