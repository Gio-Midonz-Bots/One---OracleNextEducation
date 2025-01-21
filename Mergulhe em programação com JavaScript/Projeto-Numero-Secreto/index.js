alert('Olá, bem vindo ao jogo do número Secreto?');

let numeroSecreto = 29;
let tentativas = 1 ; 
let chute;

while (chute != numeroSecreto ){
    chute = prompt('escolha um número de 1 à 50: ');
    if (numeroSecreto == chute){
        alert(`Você Acertou! o número secreto é: ${numeroSecreto} Parabéns \n FIM DE JOGO! \n você tentou ${tentativas} vezes`);
    }else{
        if(chute >numeroSecreto){
            alert(`o numero secreto é menor que o ${chute}`);
  
        }else{
            alert(`o numero secreto é maior que o ${chute}`);
            
        }
    }
    tentativas++;
}
