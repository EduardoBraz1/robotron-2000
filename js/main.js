const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        if (peca.value > 0) {
           peca.value = parseInt(peca.value) - 1 
        }
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao) {
    if(operacao === "+") {
        estatistica.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
      } else {
        estatistica.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
      }
}

function trocaImagem (cor) {
    document.querySelector('.robo').src =`./img/robotron 2000 - ${cor}.png`
}

const botaoLançar = document.querySelector('#producao')
botaoLançar.addEventListener("click", () => {
    alert('Seu robô foi lançado com sucesso! Obrigado por salvar o mundo!')
})