//alert('oi');

/*
Comentar linhas em js
*/

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;

// passo 2 - dar um jeito de identificar o clique do usuário na seta avancar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    //return; para o botão não funcionar 
    cartaoAtual = - 1
  }

  // passo 4 - buscar o cartão que está selecionado e esconder
  esconderCartaoSelecionado();

  // passo 3 - fazer aparecer o próximo cartão da lista 
  cartaoAtual++;
  mostrarCartao(cartaoAtual);

})

// passo 1 - quando clicarmos na seta de voltar temos
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) {
    //return; //para o botão não funcionar 
    cartaoAtual = cartoes.length
  }

  // passo 4 - buscar o cartão que está selecionado e esconder
  esconderCartaoSelecionado();

  // passo 3 - fazer aparecer o próximo cartão da lista 
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
})

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
  console.log(cartaoAtual);
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

