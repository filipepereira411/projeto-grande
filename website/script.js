document.getElementById('btnCarregar').addEventListener('click', () => {
    const campoResposta = document.getElementById('resposta');
    campoResposta.innerText = "A carregar dados...";

    // Faz um pedido HTTP ao teu servidor local (Backend)
    fetch('http://localhost:3000/api/dados')
        .then(response => response.json())
        .then(data => {
            // Mostra a mensagem que veio da base de dados/servidor
            campoResposta.innerText = data.mensagem;
        })
        .catch(error => {
            campoResposta.innerText = "Erro: Liga o servidor backend primeiro!";
            console.error('Erro na ligação:', error);
        });
});

