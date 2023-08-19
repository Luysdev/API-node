import dbConex from "../database/db.js";

class SelecaoController {

    index(req,res){
        const sql = "SELECT * FROM selecoes"
        dbConex.query(sql, (erro,resultado) => {
            if(erro) {
                res.status(404).json({'erro' : erro})
            }else {
                res.status(200).json(resultado);
            }
        })
    }

    show(req,res) {
        const id = req.params.id;
        const sql = "SELECT * FROM selecoes WHERE id=?"
        dbConex.query(sql,id,(erro,resultado) => {
            if(erro) {
                res.status(404).json({'erro' : erro})
            }else {
                res.status(200).json(resultado);
            }
        })
    }

    store(req,res) {
    const selecao  = req.body;
    const sql = "INSERT INTO selecoes SET ?;"
    const values = { selecoes: selecao.selecao, grupo: selecao.grupo }; 
    dbConex.query(sql,values,(erro,resultado) => {
        if(erro) {
            res.status(404).json({'erro' : erro})
        }else {
            res.status(201).json(resultado);
        }
    })

}

    uptdate(req,res) {
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?"
        dbConex.query(sql,[selecao,id],(erro,resultado) =>{
            if(erro){
                res.status(404).json({'erro':erro})
            }else{
                res.status(200).json(resultado);
            }
    })
    }

    delete(req,res) {
        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?"
        dbConex.query(sql, id,(erro,resultado) =>{
            if(erro){
                res.status(404).json({'erro':erro})
            }else{
                res.status(200).json(resultado);
            }
        })
    }
}
//padrão singleton
export default new SelecaoController();