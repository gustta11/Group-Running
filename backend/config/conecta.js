import mysql from 'mysql'

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'runninggroup'
})

connection.connect((err)=>{
    if(err){
        console.error('Erro ao se conectar com o banco de dados', err)
        return
    }
    console.log('Conectado com sucesso ao banco de dados')
})

export default connection