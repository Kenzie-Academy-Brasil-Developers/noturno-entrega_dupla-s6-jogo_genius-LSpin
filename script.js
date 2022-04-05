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

const genius__contador = document.querySelector('.genius__contador')
const iniciar = document.querySelector('.iniciar')


function iniciarJogo(){
    arrCores=[];
    let novaCor = Math.floor(Math.random() * 4)
    arrCores.push(brilhaLente(cont_botoes,novaCor));
    contador = 0;
    genius__contador.innerText="0"
}

iniciar.addEventListener('click',iniciarJogo);


const click_usuario = document.querySelectorAll('.genius__lentes');
for(let i = 0;i<click_usuario.length;i++){
    click_usuario[i].addEventListener('click', (e)=>{
        console.log(arrCores)
        console.log(contador)
     if(e.path[0].id !== arrCores[contador].id){
        alert("você errou!");     
        reiniciarJogo();
        contadorNaTela.innerText=arrCores.length;
    }
    else if(e.path[0].id === arrCores[contador].id){
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
                    let continuarCores = setInterval(continuarSequencia,1500,arrCores)
                    index = 0;
                    contador = 0;
                    console.log(arrCores)
                    console.log(contador)
                }else{
                    contador++
                    contadorNaTela.innerText=arrCores.length-1;
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
    setTimeout(apagaLente, 1000);
    return arrBrilho[num];
}

function reiniciarJogo(){
    arrCores = [];
    contador = 0;
}

