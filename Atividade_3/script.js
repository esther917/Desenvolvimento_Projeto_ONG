// Seleciona o botão pelo ID
const botaoBoasVindas = document.getElementById('boasVindasBtn');

// Função que exibe a mensagem
function mostrarMensagem() {
  alert("💙 Bem-vindo ao Instituto Bem Viver! Obrigado por visitar nosso site e apoiar nossa causa!");
}

// Adiciona o evento de clique ao botão
botaoBoasVindas.addEventListener('click', mostrarMensagem);


const coracao = document.getElementById('coracao');

coracao.addEventListener('mouseenter', () => {
  coracao.style.animation = 'pulsar 1s infinite';
});

coracao.addEventListener('mouseleave', () => {
  coracao.style.animation = 'none';
});
