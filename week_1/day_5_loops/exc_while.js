// Daniel Manoel - 13/04/2025 - 10:00
//Faça uma contagem regressiva de 10 segundos de um foguete, nos ultimos 3 segundos
// mude a mensagem para atenção.

let timer = 11

while(timer > 0){
    timer--
    if(timer > 3 && timer <= 10 ){
        console.log(`Rocket launch in: ${timer} seconds`)
    } else if (timer <= 3) {
        console.log(` ⚠️ ATTENTION: Rocket launch in: ${timer} seconds`)
        
    }
}