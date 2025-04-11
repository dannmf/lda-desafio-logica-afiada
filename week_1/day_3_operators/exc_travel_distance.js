// Daniel Manoel - 09/04/2025 - 22:53

// Suponha que você esta planejando uma viagem de carro. Seu carro faz
// 12km por litro de gasolina, e você quer calcular o número de litros de
// combustível que você precisará para a viagem, bem como o custo total do combustível.

// Quantos litros de gasolina serão necessários para viagem?
// QUanto vai custar para abastecer o carro para viagem?
let kmDistance = 20
let consumePerLiter = 12
let fuelLiterPrice = 4.30 

let litersNeeded = kmDistance / consumePerLiter
let totalFuelCost = litersNeeded * fuelLiterPrice

console.log(`Liters needed for the trip: ${litersNeeded.toFixed(2)}`);
console.log(`Total fuel cost: R$${totalFuelCost.toFixed(2)}`);
