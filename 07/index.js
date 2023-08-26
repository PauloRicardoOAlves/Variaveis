const populacaoInicial = 500
const pessoasATransmitir = 4
const tempo = 14

infectados = populacaoInicial * pessoasATransmitir ** (tempo / 7)

console.log(`o número de infectados depois de ${tempo} dias será de ${infectados} pessoas.`)