// Daniel Manoel - 13/04/2025 - 12:55

// Transforme o código criado como exemplo no dia 4 sobre os dias da semana com Switch.
// A partir disso crie uma função chamada obterDiaDaSemana que vai receber um número de 1 a 7
// e retornar o dia por extenso.

function getDayWeek(day){
    switch(day){
        case 1:
            return console.log('Sunday');
            break;
        case 2:
            return console.log('Monday');
            break;
        case 3:
            return console.log('Tuesday');
            break;
        case 4:
            return console.log('Wednesday');
            break;
        case 5:
            return console.log('Thursday');
            break;
        case 6:
            return console.log('Friday');
            break;
        case 7:
            return console.log('Saturday')
            break;
    }
}

getDayWeek(1)
getDayWeek(2)
getDayWeek(3)
getDayWeek(4)
getDayWeek(5)
getDayWeek(6)
getDayWeek(7)
