const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Permite que o teu website e a tua app .exe se liguem a este servidor
app.use(cors());
app.use(express.json());

// Rota de teste (Isto simula a leitura de dados de uma Base de Dados)
app.get('/api/dados', (req, res) => {
    res.json({ 
        mensagem: "Sucesso! Estes dados foram lidos da Base de Dados central." 
    });
});

app.listen(PORT, () => {
    console.log(`Servidor Backend a correr em http://localhost:${PORT}`);
});

