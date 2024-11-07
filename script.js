function activateOpcao(selectedOpcao) {
    // Remove a classe "active" de todas as abas
    document.querySelectorAll('.opcao').forEach(tab => {
          tab.classList.remove('active');
            });
    // Adiciona a classe "active" à aba clicada
    selectedTab.classList.add('active');
}
