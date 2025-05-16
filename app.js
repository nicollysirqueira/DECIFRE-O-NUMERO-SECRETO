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
        exibirTextoNaTela("h1", "Parabéns, você acertou!!");
        exibirTextoNaTela("p", "Você descobriu o número secreto");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1 );
}