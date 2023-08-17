import express from 'express';

const app = express();


//requisita uma rota raiz http, toda requisição precisa de um res e um request
app.get('/', (req,res)=>{
    res.send('CONECTADO');
})

export default app