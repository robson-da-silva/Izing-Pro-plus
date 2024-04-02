const axios = require('axios');

async function autenticar(req, res) {
  const { username, password } = req.body;
  try {
      // Retorna a resposta da autenticação para o cliente
    res.json(response.data);
  } catch (error) {
    // Tratar erros de autenticação
    res.status(500).json({ error: 'Erro na autenticação' });
  }
}

module.exports = {
  autenticar
};