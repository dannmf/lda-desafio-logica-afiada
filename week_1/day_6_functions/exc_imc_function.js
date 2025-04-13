// Daniel Manoel - 13/04/2025 - 12:47

// Crie uma função que utiliza o peso e a altura como parâmetros para calcular o
// IMC de uma pessoa.

function imc(height, weight){
    let calc_imc = weight / (height ** 2)    
    if(calc_imc < 18.5){
        return console.log(`Underweight`)
    } else if (calc_imc >= 18.5 && calc_imc < 24.9){
        return console.log(`Normal weight`)
    } else if (calc_imc >= 24.9 && calc_imc < 29.9){
        return console.log(`Overweight`)
    } 
    
}

imc(1.72,60)



