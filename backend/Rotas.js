import express from 'express'
const app = express()
import cors from 'cors'
import {getAllGrupo, createGrupo, updateGrupo, deleteGrupo} from './controller/grupoController.js'
import {getAllAcessoria, createAcessoria, updateAcessoria, deleteAcessoria} from './controller/acessoriaController.js'

app.use(express.json())
app.use(cors())

app.get('/grupo', getAllGrupo)
app.post('/grupo', createGrupo)
app.put('/grupo/:id_grupo',updateGrupo)
app.delete('/grupo/:id_grupo', deleteGrupo)

app.get('/acessoria', getAllAcessoria)
app.post('/acessoria', createAcessoria)
app.put('/acessoria/:id_acessoria',updateAcessoria)
app.delete('/acessoria/:id_acessoria', deleteAcessoria)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})