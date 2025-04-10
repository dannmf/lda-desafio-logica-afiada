// Daniel Manoel Filho - 09/04/2025 21:00

// 1 Imagine que você tem algumas váriaveis com compras no cartão de crédito,
// e uma com um valor a ser estornado de uma compra errada, calcule o total da fatura atualizada

let valuePurchase = 600
let refundValue = 80
let totalCreditCardBill = valuePurchase - refundValue

console.log(`Value purchase was canceled. The credit card bill total has been updated: \$${totalCreditCardBill}`)

// 2. Calcule a sua idade a partir de duas variáveis contendo o ano de nascimento e o ano atual

let currentYear = 2025
let birthYear = 2003

let age = currentYear - birthYear

console.log(`Your age based on current year and your birth year is: ${age}`)
console.log('----------------------------')
// 3. Imagine que em um jogo você tenha um total de moedas e para cada vez que você
// compra um artefato, você gasta um determinado número de moedas. Calcule a quantidade final de moedas.

let currentRupees = 3000
let dekuShield = 40
let masterSword = 1000
let kokiriTunic = 10

let price = dekuShield + masterSword + kokiriTunic
let totalRupees = currentRupees - dekuShield - masterSword - kokiriTunic


console.log(`The price of your purchase is: ${price} Rupees`)
console.log(`The current value of Rupees after the purchase is: ${totalRupees}`)