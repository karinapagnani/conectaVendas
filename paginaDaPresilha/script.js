function activateOpcao(selectedOpcao) {
  // Remove a classe "active" de todas as abas
  document.querySelectorAll('.opcao').forEach(tab => {
        tab.classList.remove('active');
          });
  // Adiciona a classe "active" à aba clicada
  selectedOpcao.classList.add('active');
}
/*
function alterarVisibilidade() {
  // Obtém os divs pelo ID
  const primeiro = document.getElementById('primeiro');
  const segundo = document.getElementById('segundo');

  // Define div2 como invisível e div1 como visível
  primeiro.style.display = 'block';
  segundo.style.display = 'nome';
}
*/