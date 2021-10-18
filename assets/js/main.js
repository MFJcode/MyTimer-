

function relogio() {

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); // multiplicamos por 1000 e agora temos os milesimos de segundo
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT' // poderia usar tambem o 'UTC' depois ler mais sobre timeZone
        })

    }


    const chrnoEl = document.querySelector(".chrono");
    let segundos = 0; // usaremos para iniciar o relogio e esta é uma variavel global, e mesmo parando o cronometro ela mante o estado
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () { // aqui tambem pegamos a variavel timer global de dentro da funçao eu posso acessar variaveis de fora mas o contrario nao é permitido
            segundos++; // essa é a variavel segundos global que criamos em cima.
            chrnoEl.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000) // 1000 para contar de segundo em segundo, a cada iteraçao vai somar 1 segundo a variavel segundo
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('start')) {
            chrnoEl.classList.remove('pausado');
            clearInterval(timer); // agora nao fica dois timers brigando pelos segundos
            iniciaRelogio();
        }


        if (el.classList.contains('stop')) {
            clearInterval(timer);
            chrnoEl.classList.add('pausado');
        }

        if (el.classList.contains('reset')) {
            chrnoEl.classList.remove('pausado');
            clearInterval(timer);
            chrnoEl.innerHTML = '00:00:00';
            segundos = 0;
        }

    })

}

relogio();



























//------------------------------------------------------------------------------//

/*

// new Date(0);

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // multiplicamos por 1000 e agora temos os milesimos de segundo
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // poderia usar tambem o 'UTC' depois ler mais sobre timeZone
    })

}

console.log(criaHoraDosSegundos(10));

const chrnoEl = document.querySelector(".chrono");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let segundos = 0; // usaremos para iniciar o relogio e esta é uma variavel global, e mesmo parando o cronometro ela mante o estado
let timer;

function iniciaRelogio() {
    timer = setInterval(function(){ // aqui tambem pegamos a variavel timer global de dentro da funçao eu posso acessar variaveis de fora mas o contrario nao é permitido
        segundos++; // essa é a variavel segundos global que criamos em cima.
        chrnoEl.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000) // 1000 para contar de segundo em segundo, a cada iteraçao vai somar 1 segundo a variavel segundo
}

startBtn.addEventListener('click', function(event){
    chrnoEl.classList.remove('pausado');
    clearInterval(timer); // agora nao fica dois timers brigando pelos segundos
    iniciaRelogio();
})

stopBtn.addEventListener('click', function(event){
    clearInterval(timer);
    chrnoEl.classList.add('pausado');
})

resetBtn.addEventListener('click', function(event){
    chrnoEl.classList.remove('pausado');
    clearInterval(timer);
    chrnoEl.innerHTML = '00:00:00';
    segundos = 0;

})

*/