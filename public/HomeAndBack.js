// Salva a página atual antes de navegar para outra
if (window.location.href !== 'http://seusite.com/index.html') { // Substitua pelo URL da sua página inicial
    sessionStorage.setItem('paginaAnterior', window.location.href);
}

// Lógica do botão "Voltar"
document.getElementById('btnVoltar').addEventListener('click', function () {
    const paginaAnterior = sessionStorage.getItem('paginaAnterior');
    if (paginaAnterior) {
        window.location.href = paginaAnterior; // Redireciona para a página anterior
    } else {
        window.location.href = '/index.html'; // Redireciona para a página inicial se não houver página anterior
    }
});

// Lógica do botão "Home"
document.getElementById('btnHome').addEventListener('click', function () {
    window.location.href = '/index.html'; // Redireciona para a página inicial
});