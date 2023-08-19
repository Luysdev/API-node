import express from 'express';
import dbConex from '../db/db.js';

const app = express();

//Faz com que o express leia o body com o json
app.use(express.json());

app.get('/selecoes', (req,res)=>{
    const sql = "SELECT * FROM selecoes"
    dbConex.query(sql, (erro,resultado) => {
        if(erro) {
            res.status(404).json({'erro' : erro})
        }else {
            res.status(200).json(resultado);
        }
    })
})

app.get('/selecoes/:id', (req,res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id=?"
    dbConex.query(sql,id,(erro,resultado) => {
        if(erro) {
            res.status(404).json({'erro' : erro})
        }else {
            res.status(200).json(resultado);
        }
    })
})

app.post('/selecoes', (req,res) => {
    const selecao  = req.body;
    const sql = "INSERT INTO selecoes SET ?;"
    const values = { selecoes: selecao.selecao, grupo: selecao.grupo }; 
    dbConex.query(sql,values,(erro,resultado) => {
        if(erro) {
            res.status(400).json({'erro' : erro})
        }else {
            res.status(201).json(resultado);
        }
    })

})

app.delete('/selecoes/:id', (req,res)=>{
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?"
    dbConex.query(sql, id,(erro,resultado) =>{
        if(erro){
            res.status(404).json({'erro':erro})
        }else{
            res.status(200).json(resultado);
        }
    })
})

app.put('/selecoes/:id', (req,res) => {
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?"
    dbConex.query(sql,[selecao,id],(erro,resultado) =>{
        if(erro){
            res.status(404).json({'erro':erro})
        }else{
            res.status(200).json(resultado);
        }
})})

export default app