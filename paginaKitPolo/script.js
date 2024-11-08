function activateOpcao(selectedOpcao) {
    // Remove a classe "active" de todas as abas
    document.querySelectorAll('.opcao').forEach(tab => {
          tab.classList.remove('active');
            });
    // Adiciona a classe "active" à aba clicada
    selectedOpcao.classList.add('active');
}

function trocarImagem(imagem) {
  // aqui seleciona a imagem principal pelo id que eu coloquei : "fotoAtiva"
  var imagemPrincipal = document.getElementById("fotoAtiva");
  // aqui atualiza o src da imagem principal com o src da imagem clicada
  imagemPrincipal.src = imagem.src;
}