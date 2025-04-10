// Daniel Manoel - 09/04/2025 - 20:31

let weight = 60;
let height = 1.70;

let calc_imc = weight / (height ** 2)

console.log(`Your IMC is: ${calc_imc.toFixed(2)}`)

if(calc_imc < 18.5){
    console.log(`Underweight`)
} else if (calc_imc >= 18.5 && calc_imc < 24.9){
    console.log(`Normal weight`)
} else if (calc_imc >= 24.9 && calc_imc < 29.9){
    console.log(`Overweight`)
} 

