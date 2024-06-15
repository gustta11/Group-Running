import connection from "../config/conecta.js";


export function read(callback){
    connection.query('SELECT * from acessoria where activo_acessoria = 1', callback)
}
export function create(nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria,callback){
    connection.query('INSERT INTO acessoria (nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria,activo_acessoria) VALUES(?,?,?,?,?,?,1)', [nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria], callback)
}
export function update(nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria, id_acessoria, callback){
    connection.query('UPDATE acessoria SET nome_acessoria = ?, contato_acessoria = ?, finalidade_acessoria = ?, cidade_acessoria = ?, estado_acessoria = ?, valor_acessoria = ?, activo_acessoria = 1 WHERE id_acessoria = ?', [nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria, id_acessoria], callback)
}
export function deleteAcesso(id_acessoria, callback) {
    connection.query('UPDATE acessoria SET activo_acessoria = 0 WHERE id_acessoria = ?', [id_acessoria], (err, result) => {
        if (err) {
            console.error("Erro ao tentar excluir acessoria:", err);
            callback(err, null);
            return;
        }
        if (result.affectedRows === 0) {
            const error = new Error(`Acessoria com id ${id_acessoria} não encontrado.`);
            callback(error, null);
            return;
        }
        callback(null, result);
    });
}