import dbConex from "../database/db.js";

class SelecaoRepositorie {
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        const values = { selecoes: selecao.selecao, grupo: selecao.grupo }; 
        return new Promise((resolve, reject)=> {
            dbConex.query(sql, values, (erro, result) => {
                if(erro) return reject ('Não foi possivel criar')
                const text = JSON.parse(JSON.stringify(result))
                return resolve(result)
            })
        })
    }
    findAll(){
        const sql = "SELECT * FROM selecoes"
        return new Promise((resolve,reject) => {
            dbConex.query(sql, (erro,result) => {
                if(erro) return reject('não foi possivel localixar')
                const text = JSON.parse(JSON.stringify(result))
                return resolve(text)
            })
        })
    }
    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?"
        return new Promise((resolve, reject) => {
            dbConex.query(sql, id, (erro, result) => {
                if(erro) return reject('nao foi possivel localizar ID')
                const text = JSON.parse(JSON.stringify(result))
                return resolve(text)
            })
        })
    }
    update(selecao,id){ 
        const sql = "UPDATE selecoes SET ? WHERE id=?"
        return new Promise((resolve,reject) => {
            dbConex.query(sql,[selecao,id], (erro,result) => {
                if(erro) return reject('Nãp foi possivel fazer a atualização')
                const text = JSON.parse(JSON.stringify(result))
                return resolve(text)
            })
        })
    }
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?"
        return new Promise((resolve, reject) => {
            dbConex.query(sql,id,(erro, result) => {
                if(erro) return reject('Não foi possivel deletar seleção')
                const text = JSON.parse(JSON.stringify(result))
                return resolve(text)
            })
        })
    }
}
    
   

export default new SelecaoRepositorie;