
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90 //subtrai 90 para que a imagem do mosquito caiba na tela ao aparecer próximo ao limite da tela
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX //resolve o problema de quando as posicoes x e y se coincidem com 0 - 90, valor negativo. se for menor que 0, ela passa a ser 0 ou recebe o valor de posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}

