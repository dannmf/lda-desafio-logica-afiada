// Daniel Manoel - 13/04/2025 - 13h00
// Volte ao dia 5, no desafio 1, e crie uma função que fará todo o cálculo qu detalhamos no desafio.
// Você tem um valor inicial de uma aplicação financeira que rende um percentual ao ano.
// Calcule como esse investimento cresce no decorrer do ano.

function investmentReturn(valueInvested, percentage, yearsInvested){
    for(years = 1; years <= yearsInvested; years++){
        valueInvested += valueInvested * percentage
        console.log(`In ${years} years your investment has returned: ${valueInvested.toFixed(2)}`)
    }
}

investmentReturn(100,0.12,15)