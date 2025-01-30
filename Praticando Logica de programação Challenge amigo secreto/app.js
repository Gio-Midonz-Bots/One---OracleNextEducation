let nomeDeAmigos = [];
// Explicação 
// O campo de input cria uma caixa para que os dados sejam inseridos.
// O querySelector recupera os dados inseridos.
// O value acessa os dados inseridos e os disponibiliza para uso.
function adicionarAmigo(){
    let amigo = document.querySelector('.input-name').value;

    if(amigo == ''){
        alert('Por favor, insira um nome.');
    }else{
        nomeDeAmigos.push()
        limparcaixa();
    }
}

function exibirTextoNaTela(){
    
}

function limparcaixa(){
    amigo = document.querySelector('.input-name');
    amigo.value = '';
}