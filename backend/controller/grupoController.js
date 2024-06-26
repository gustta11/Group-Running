import {read, create, update, deleteGrup} from '../model/grupoModel.js'

export async function createGrupo(req, res){
    const{nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo} = req.body
    console.log('Dados recebidos do frontend:', {nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo})

    create(nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Grupo criado com sucesso'})
    })
}

export async function getAllGrupo(req, res){
    read((err, grupo) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(grupo)
    })
}

export async function updateGrupo(req,res){
    const{id_grupo} = req.params
    console.log('Dados recebidos do front', {id_grupo})
    const {nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo} = req.body
    update(nome_grupo,contato_grupo,finalidade_grupo,cidade_grupo,estado_grupo,id_grupo, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.status(201).json({mensagem:'grupo atualizado'})
    })
}

export async function deleteGrupo(req,res){
    const {id_grupo} = req.params
    deleteGrup(id_grupo,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.status(201).json({mensagem:'grupo excluído'})
    })
}