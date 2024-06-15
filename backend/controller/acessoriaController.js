import {read, create, update, deleteAcesso} from '../model/acessoriaModel.js'

export async function createAcessoria(req, res){
    const{nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria} = req.body
    console.log('Dados recebidos do frontend:', {nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria})

    create(nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Acessoria criada com sucesso'})
    })
}

export async function getAllAcessoria(req, res){
    read((err, acessoria) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(acessoria)
    })
}

export async function updateAcessoria(req,res){
    const{id_acessoria} = req.params
    console.log('Dados recebidos do front', {id_acessoria})
    const {nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria} = req.body
    update(nome_acessoria,contato_acessoria,finalidade_acessoria,cidade_acessoria,estado_acessoria,valor_acessoria,id_acessoria, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.status(201).json({mensagem:'acessoria atualizado'})
    })
}

export async function deleteAcessoria(req,res){
    const {id_acessoria} = req.params
    deleteAcesso(id_acessoria,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.status(201).json({mensagem:'Acessoria excluído'})
    })
}