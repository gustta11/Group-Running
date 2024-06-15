import connection from "../config/conecta.js";


export function read(callback){
    connection.query('SELECT * from grupo where activo_grupo = 1', callback)
}
export function create(nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo,callback){
    connection.query('INSERT INTO grupo (nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo,activo_grupo) VALUES(?,?,?,?,?,1)', [nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo], callback)
}
export function update(nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo, id_grupo, callback){
    connection.query('UPDATE grupo SET nome_grupo = ?, contato_grupo = ?, finalidade_grupo = ?, cidade_grupo = ?, estado_grupo = ?, activo_grupo = 1 WHERE id_grupo = ?', [nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo,id_grupo], callback)
}
export function deleteGrup(id_grupo, callback){
    connection.query('UPDATE  grupo SET activo_grupo = 0 WHERE id_grupo = ?', [id_grupo], callback)
}