let nomes = [];
let nome;

function exibirTxt(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    nome = document.querySelector('#amigo').value;
    if (nome) {
        nomes.push(nome);
        limparCampo();
        exibirTxt('p', 'Nome adicionado: ' + nome);
        atualizarListaAmigos();
    } else {
       alert('Por favor, digite um nome.');
    }
}

function atualizarListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML="";

    for (let i = 0; i < nomes.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomes[i]; 
        lista.appendChild(item); 
    }
}

function sortearAmigo(){

    if(nomes.length==0){
        document.querySelector('#resultado').innerHTML = "Nenhum nome disponível para o sorteio.";
        return;
    }

    let numRand =  Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[numRand];

    document.querySelector('#resultado').innerHTML = "Você sorteou: "+sorteado;

    nomes = [];
    atualizarListaAmigos();

}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value='';
}
