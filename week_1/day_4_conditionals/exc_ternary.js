// Daniel Manoel - 10/04/2025 - 23:30

//1. Converta essa forma de condicional em uma condição ternária.

let grade = 85
let status_;

// if(grade >=70){
//     status_ = "approved"
// } else {
//     status_ = "reproved"
// }

// console.log(status_)

grade >= 70 ? status_ = "approved" : status_ = "reproved"

console.log(status_)

// Escreva um código que determina se o cliente pode fazer compras comsua conta.
// As condições para poder comprar são:

// 1. A conta precisa estar ativa;
// 2. Saldo deve ser maior que R$ 500;

let account_status = false
let balance = 400

account_status == true && balance > 500 ? console.log('Account Active.') : console.log('Account disabled')