// Calcule qunato tempo em (em anos) levará para que um investimento inicial dobre,
// considerando uma taxa de juros de 5% ao ano.

let initialInvestiment = 1000
let investiment = initialInvestiment
let years = 0

while(investiment < initialInvestiment * 2){
    years++
    investiment += investiment * 0.05 
}

console.log(`Your investment has doubled in ${years} years`)

