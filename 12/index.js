const montante = 90000
const capital = 60000
const tempo = 24

taxa = (montante / capital) ** (1 / tempo) - 1
taxa = taxa * 100

console.log(`o seu financiamento de ${capital} reais teve uma taxa de ${taxa}%, pois após 24 meses você teve que pagar ${montante} reais`)