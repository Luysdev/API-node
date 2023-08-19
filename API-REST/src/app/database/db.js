import mysql from 'mysql2'

const dbConex = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '7489+-20Li',
    database : 'dbcopa'
})

dbConex.connect()

/**
 * executa um código sql com ou sem valores
 * @param {string} sql // intrução
 * @param {string=id | [selecao,id]} values 
 * @param {string} mensagemReject 
 * @returns objeto Promisse
 */
export const consulta = (sql,values='', mensagemReject) => {
    return new Promise((resolve, mensagemReject)=> {
        dbConex.query(sql, values, (erro, result) => {
            if(erro) return mensagemReject('Não foi possivel criar')
            const text = JSON.parse(JSON.stringify(result))
            return resolve(result)
        })
    })
}
export default dbConex;