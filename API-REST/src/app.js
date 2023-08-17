import express from 'express';

const app = express();

// post, get, put, delet

//Faz com que o express leia o body com o json
app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: 'BRASIL', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

function  buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id )
}

function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

//requisita uma rota raiz http, toda requisição precisa de um res e um request
app.get('/', (req,res) => {
    res.send('CONECTADO');
})

app.get('/selecoes', (req,res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req,res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

// Uso o metodo post para receber uma informação através do request 
app.post('/selecoes', (req,res)=>{
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso');
})

app.delete('/selecoes/:id', (req,res) => {
    let index = buscaIndexSelecao(req.param.id);
    selecoes.splice(index, 1)
    res.send('Seleção excluida com sucesso')
})

//put atualiza um dado
app.put('/selecoes/:id', (req,res) => {
    let index = buscaIndexSelecao(req.param.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo  = req.body.grupo
    res.json(selecoes)
})
//?????????????

export default app