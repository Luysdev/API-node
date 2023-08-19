import {consulta} from "../database/db.js";

class SelecaoRepositorie {
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        const values = { selecoes: selecao.selecao, grupo: selecao.grupo }; 
        return consulta(sql,values, 'Não foi possivel cadastrar')
    }
    findAll(){
        const sql = "SELECT * FROM selecoes"
        return consulta(sql,'Não foi possivel cadastrar')
    }
    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?"
        return consulta(sql,id,'Não foi possivel localizar')
    }
    update(selecao,id){ 
        const sql = "UPDATE selecoes SET ? WHERE id=?"
        return consulta(sql,[selecao,id],'Não foi possivel cadastrar')
    }
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?"
        return consulta(sql,id,'Não foi possivel deletar')
    }
}
    
   

export default new SelecaoRepositorie;