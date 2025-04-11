
// Daniel Manoel - 10/04/2025 - 20:05
// Informe para um aluno a sua performance em uma prova a partir da sua nota
// 1. Se a nota for menor que 5, mostre que foi "insuficiente"
// 2. Se a nota for menor que 6, mostre "regular"
// 3. Se a nota for menor que 7.5, mostre "bom"
// 4. Se a nota for menor que 9, mostre "muito bom"
// 5. Se a nota for maior ou igual a 9 mostre "excelente"

let grade = 8.9

if (grade < 5){
    console.log('Insuficient')
} else if (grade < 6){
    console.log('Regular')
} else if (grade < 7.5){
    console.log('Good')
} else if( grade < 9) {
    console.log('Very Good')
} else if (grade >= 9){
    console.log('Excelent')
}