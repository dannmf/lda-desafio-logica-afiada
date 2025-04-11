// Daniel Manoel - 10/04/2025 - 20:05

// Calcule em quanto tempo a carteira de motorista irá vencer de acordo com a legislação.
// 1. Se você está tirando a carteora pela 1º vez, o tempo de vencimento é de um ano;
// 2. Se você tem idade inferior a 50 anos, o vencimento é de 10 anos;
// 3. Se for igual ou superior a 50 anos ou inferior a 70 anos, o vencimento é de 5 anos;
// 4. Se for igual ou superior a 70 anos, o vencimento será de 3 anos;

let age =71

if (age >= 17 && age <= 18  ){
    console.log('The expiration period of your driver\'s license is 1 year')
} else if (age < 50){
    console.log('The expiration period of your driver\'s license is 10 years')
} else if (age >= 50 && age < 70){
    console.log('The expiration period of your driver\'s license is 5 years')
} else if (age >= 70){
    console.log('The expiration period of your driver\'s license is 3 years')
}