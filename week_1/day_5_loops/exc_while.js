let timer = 11

while(timer > 0){
    timer--
    if(timer > 3 && timer <= 10 ){
        console.log(`Rocket launch in: ${timer} seconds`)
    } else if (timer <= 3) {
        console.log(` ⚠️ ATTENTION: Rocket launch in: ${timer} seconds`)
        
    }
}