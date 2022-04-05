const genius = document.querySelector(".genius");

function criaJogo(){
    let lentes__container = document.createElement('div');
    lentes__container.setAttribute('class','lentes__container');
    lentes__container.innerHTML = `
        <button class="genius__lentes genius__lentes--azul" id="azul" ></button>
        <button class="genius__lentes genius__lentes--vermelho" id="vermelho"></button>
        <button class="genius__lentes genius__lentes--verde" id="verde"></button>
        <button class="genius__lentes genius__lentes--amarelo" id="amarelo"></button>
        <div class="genius__controles">
            <div class="agrupar__elementos">
                <div class="genius__contador ">--</div>
                <p class="genius__conta_pontos">Pontos</p>
            </div>
            <div class="agrupar__elementos">
                <button class="genius__botao iniciar"></button>
                <p>Iniciar/Reiniciar</p>
            </div>
        </div>
    `
    genius.appendChild(lentes__container)
}
criaJogo();

let arrCores = [];
let contador = 0;
const contadorNaTela = document.querySelector('.genius__contador');
const cont_botoes = [
    {
        id:"azul"
    },
    {
        id:"vermelho"
    },
    {
        id:"verde"
    },
    {
        id:"amarelo"
    }
]

const iniciar = document.querySelector('.iniciar')

function criaCores(){
    return Math.floor(Math.random() * 4);
} 

function iniciarJogo(){
    reiniciarJogo();
    arrCores.push(brilhaLente(cont_botoes,criaCores()));
}

function reiniciarJogo(){
    arrCores = [];
    contador = 0;
    contadorNaTela.innerText=arrCores.length;
}

function brilhaLente(arrBrilho,num){
    const escolheCor = document.getElementById(arrBrilho[num].id)        
    escolheCor.classList.add('genius__lentes--ligado');
    function apagaLente(){
        escolheCor.classList.remove('genius__lentes--ligado');
    }
    setTimeout(apagaLente, 1000);
    return arrBrilho[num];
}

iniciar.addEventListener('click',iniciarJogo);
const click_usuario = document.querySelectorAll('.genius__lentes');

for(let i = 0;i<click_usuario.length;i++){
    click_usuario[i].addEventListener('click', (e)=>{
        if(e.path[0].id !== arrCores[contador].id){
            alert("você errou!");     
            reiniciarJogo();
        } else{
            if(contador === arrCores.length-1){
                arrCores.push(cont_botoes[criaCores()])
                let index = 0;
                function continuarSequencia(arrSequencia){
                    if(index === arrSequencia.length-1){
                        clearInterval(continuarCores);
                    }
                    brilhaLente(arrSequencia,index);
                    index++;
                } 
                let continuarCores = setInterval(continuarSequencia,1500,arrCores)
                index = 0;
                contador = 0;
            }
            else{
                contador++
                contadorNaTela.innerText=arrCores.length-1;
            }
        } 
    })
}