import express from 'express';
import cors from 'cors';
import axios from 'axios'

const PORT = 4000;
const app = express();

app.use(cors())

app.get('/search', async (req, res) => {

    const apiKey = 'a731c61f168937fc1044e8d2581b72838c3588aaebffd30bf269a1983de6daef';

    const URL = "https://serpapi.com/search.json"
    
    const { query } = req.query;
    
    try{
        const response = await axios.get(URL, {
            params: {
              q: query,
              api_key: apiKey,
              num: 10,
              engine: "google",
              google_domain: "google.com.br",
              gl: "br",
              h1: "pt-br"
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "ocorreu um erro ao fazer a requisição à API" });
    }
});

app.listen(PORT, () => {
    console.log(`O proxy está rodando na porta ${PORT}`);
});