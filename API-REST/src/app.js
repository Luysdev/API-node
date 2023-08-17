import express from 'express';

const app = express();

//Faz com que o express leia o body com o json
app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: 'BRASIL', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

//requisita uma rota raiz http, toda requisição precisa de um res e um request
app.get('/', (req,res)=>{
    res.send('CONECTADO');
})

app.get('/selecoes', (req,res)=>{
    res.status(200).send(selecoes)
})

// Uso o metodo post para receber uma informação através do request 
app.post('/selecoes', (req,res)=>{
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso');
})

export default app