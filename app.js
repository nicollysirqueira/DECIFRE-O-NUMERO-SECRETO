let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Decifre o número");
exibirTextoNaTela("p", "Escolha um número entre 1 a 100");

function verificarChute() {
    console.log("botão foi clicado!");
}

function gerarNumeroAleatorio() { //gerar número aleatorio
    parseInt(Math.random() * 100 + 1 );
}