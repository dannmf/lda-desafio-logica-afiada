// Daniel Manoel - 13/04/2025 - 10:00

// Você comprou um produto e optaou por parcelar o valor em 12x sem juros.
// Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.

let productPrice = 1500
let installmentValue = productPrice / 12
let amountLeft = productPrice

for(installment = 1; installment <=12 ; installment++){
    amountLeft -= installmentValue
    console.log(`Installment number: ${installment}x \n Amount left: ${amountLeft}`)
} 

// Você comprou um produto e optaou por parcelar o valor em 12x sem juros.
// Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.



