document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = "Check-in Realizado!";
    this.style.backgroundColor = '#28a745'; // Muda a cor do botão para verde
});

document.getElementById('entradaTexto').addEventListener('input', function() {
    var texto = this.value;
    document.getElementById('textoAlterado').innerText = texto;
});

document.getElementById('meuLink').addEventListener('click', function(event) {
    event.preventDefault(); // Previne a navegação padrão
    document.getElementById('linkMensagem').innerText = "Você clicou no link!";
});

document.getElementById('adicionarLink').addEventListener('click', function() {
    var novoLink = document.createElement('a');
    novoLink.href = "https://open.spotify.com/intl-pt"; // Link do Spotify
    novoLink.target = "_blank"; // Abre o link em outra aba
    novoLink.innerText = "Abrir Spotify";

    // Adiciona o link ao corpo do documento
    document.body.appendChild(novoLink);
});
    // Adiciona uma quebra de linha após o novo link
    novosLinksDiv.appendChild(document.createElement('br'));({
});
