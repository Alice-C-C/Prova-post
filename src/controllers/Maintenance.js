import maintenance from "../models/Maintenance.js";
import workshop from "../models/Workshop.js";

const create = async (req,res)=> {
    try{
        const content = await maintenance.create(req.body);
        res.status(201).json(content);
    }catch(error){
        console.log(req.body)
        res.status(400).send("Erro ao criar manuntenção");
    }
}

const index = async (req, res) => {
    try{
        const content = await maintenance.find(req.query).populate("workshop").populate("vehicle").exec();
        res.json(content);
    }catch(error){
        res.status(400).send(error);
    }
}

const show = async (req, res) => {
    try{
        const content = await maintenance.findById(req.params.id).populate("workshop").populate("vehicle").exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao mostrar");
    }
}

const update = async (req, res) => {
    try{
        const content = await maintenance.findByIdAndUpdate(
            req.params.id,
            req.body
        ).exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao atualizar");
    }
}

const destroy = async (req, res) => {
    try{
        const content = await maintenance.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao deletar");
    }
}

export default {create, index, show, update, destroy}