let listaDeNumerosSorteados=[];
let numeroLimite=5;
let numeroSecreto=gerarNumeroAleatorio();
let jogadas=1;
function mensagemInicial()
{
exibirTextoNaTela('h1','Bem vindo ao jogo do Numero Secreto');
exibirTextoNaTela('p','Escreva um numero de 1 a 100');
document.getElementById('reiniciar').setAttribute('disabled',true);
}
function gerarNumeroAleatorio()
{
  let numeroEscolhido=parseInt(Math.random()*numeroLimite+1);
  let quantidadeDeElementosDaLista=listaDeNumerosSorteados.length;
  
  if(quantidadeDeElementosDaLista==numeroLimite)
   {
      listaDeNumerosSorteados=[];
   }
  
   if(listaDeNumerosSorteados.includes(numeroEscolhido))
  {
   return gerarNumeroAleatorio();
  }
  else
  {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
function exibirTextoNaTela(tag,texto)
{
  let campo=document.querySelector(tag);
  campo.innerHTML=texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function obtendoNumero()
{
  let numeroUsuario=document.querySelector('input').value;
  if(numeroSecreto==numeroUsuario)
  {
    exibirTextoNaTela('h1','Parabens!!');
    let palavraJogadas=jogadas>1? 'tentativas':'tentativa';
mensagemJogadas=`Voce acertou o numero secreto em ${jogadas} ${palavraJogadas}`;
    exibirTextoNaTela('p',mensagemJogadas);
    document.getElementById('reiniciar').removeAttribute('disabled');
 }
  else
  {
    jogadas++;
    limparCampo();
    exibirTextoNaTela('h1','Tente Novamente...')
    if(numeroUsuario>numeroSecreto)
    {
      exibirTextoNaTela('p','O numero secreto é menor...');
    }
    else
    {
      exibirTextoNaTela('p','O numero secreto é maior...');
    }
  }
}  
function limparCampo()
{
  numeroUsuario=document.querySelector('input');
  numeroUsuario.value='';
}
function novoJogo()
{
   numeroSecreto=gerarNumeroAleatorio();
   limparCampo();
   mensagemInicial();
   jogadas=1;
   }
   mensagemInicial();
