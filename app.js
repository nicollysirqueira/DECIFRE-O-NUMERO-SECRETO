let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Decifre o número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 a 100");

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("Parabéns, você acertou!!");
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1 );
}