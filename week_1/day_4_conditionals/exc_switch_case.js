// Daniel Manoel - 10/04/2025 - 20:39

// Crie um código usando switch que imprima uma mensagem adequada para o motorista. 
// O sistema tem três possíveis estados: "Aberta", "Fechada", e "Manutenção".

let parking_gate_state = "Open"

switch(parking_gate_state){
    case "Open":
        console.log('The gate is open')
        break;
    case "Closed":
        console.log('The gate is closed')
        break;
    case "Maintenance":
        console.log('The gate is under maintenance ')
        break;
    default:
        console.log('Gate Error')
}

console.log('-----------------')


// Crie um código usando switch que calcule e imprima o valor final do produto após
// a aplicação do desconto, com base no tipo do produto.
// O desconto é dado com base no tipo do produto:
// - ALimentos tem um desconto de 5%
// - Eletronicos tem um desconto de 10%
// - Roupas tem um desconto de 20%
// - Livros tem um desconto de 50%;
// Se o tipo do desconto não estiver na lista, não há desconto

let product_type = "Books"
let product_value = 500
let discount;
let percentage;


switch(product_type){
    case "Food":
        percentage = product_value * 0.05
        discount = product_value - percentage
        console.log(`Value with discount: ${discount}`)
        break; 
    case "Eletronic":
        percentage = product_value * 0.1
        discount = product_value - percentage
        console.log(`Value with discount: ${discount}`)
        break; 
    case "Clothes":
        percentage = product_value * 0.2
        discount = product_value - percentage
        console.log(`Value with discount: ${discount}`)
        break; 
    case "Books":
        percentage = product_value * 0.5
        discount = product_value - percentage
        console.log(`Value with discount: ${discount}`)
        break; 
    default:
        console.log('No discount to apply')
}


