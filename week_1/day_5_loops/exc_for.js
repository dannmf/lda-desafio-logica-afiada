// Suponha que você investiu R$1000 em uma aplicação financeira que rende 12% ao ano
// Usando um loop "for", calcule como esse investimento cresce ao longo do tempo,
// nos próximos 10 anos.

let valueInvested = 1000
let percentage = 0.12

let yearsInvested = 10

for(years = 1; years <= yearsInvested; years++){
    valueInvested += valueInvested * percentage
    console.log(`In year ${years }, your investment return was: ${valueInvested.toFixed(2)}`)
}

