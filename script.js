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
                <button class="genius__botao on__off"></button>
                <p>Liga/Desliga</p>
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

const genius__contador = document.querySelector('.genius__contador')
const iniciar = document.querySelector('.iniciar')
function liga(){
    genius__contador.innerText = "0"; 
}

const botao_onOff = document.querySelector('.on__off');
botao_onOff.addEventListener('click',liga());

function iniciarJogo(){
    let novaCor = Math.floor(Math.random() * 4)
    arrCores.push(brilhaLente(cont_botoes,novaCor));
}

iniciar.addEventListener('click',iniciarJogo);


const click_usuario = document.querySelectorAll('.genius__lentes');
for(let i = 0;i<click_usuario.length;i++){
    click_usuario[i].addEventListener('click', (e)=>{
            if(e.path[0].id === arrCores[contador].id){
                if(contador === arrCores.length-1){
                    let novaCor = Math.floor(Math.random() * 4);
                    arrCores.push(cont_botoes[novaCor])
                    let index = 0;
                    function continuarSequencia(arrSequencia){
                        if(index === arrSequencia.length-1){
                                clearInterval(continuarCores);
                            }
                            brilhaLente(arrSequencia,index);
                            index++;
                        } 
                    let continuarCores = setInterval(continuarSequencia,3000,arrCores)
                    index = 0;
                    console.log(arrCores)
                }
            } 
    })
}


function brilhaLente(arrBrilho,num){
    const escolheCor = document.getElementById(arrBrilho[num].id)        
    escolheCor.classList.add('genius__lentes--ligado');
    function apagaLente(){
        escolheCor.classList.remove('genius__lentes--ligado');
    }
    setTimeout(apagaLente, 2000);
    return arrBrilho[num];
}

