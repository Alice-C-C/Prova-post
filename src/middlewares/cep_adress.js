import conn from "../config/db.js"
import axios from "axios"


const cep_endereco = (req, res, next) => {
   const numero = req.body.numero
   axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
   .then( (resposta) => {
      
       const {logradouro,bairro,localidade,uf,estado} = resposta.data
       delete req.body.cep 
       req.body.adress = {logradouro,bairro,localidade,uf,estado, numero}
       console.log(req.body.adress);
    next()
 })
 .catch(error => res.status(400).json(error))
}
export default cep_endereco