
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var tempoCriaMosquito = 1500

var nivel = window.location.search //search retorna apenas o "?parâmetro"
nivel = nivel.replace('?', '') //para remover o caracter "?" que o search retorna junto ao parametro

if(nivel === 'normal'){
    tempoCriaMosquito = 1500
}else if(nivel === 'dificil'){
    tempoCriaMosquito = 1000
}else if(nivel === 'chucknorris'){
    tempoCriaMosquito = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo--

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)

function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'

        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 //subtrai 90 para que a imagem do mosquito caiba na tela ao aparecer próximo ao limite da tela
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX //resolve o problema de quando as posicoes x e y forem iguais a 0 - 90, ou seja, valor negativo (o mosquito some da tela). Se for menor que 0, ela passa a ser 0 ou recebe o valor de posicaoX.
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
    }       return 'mosquito3'
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}


