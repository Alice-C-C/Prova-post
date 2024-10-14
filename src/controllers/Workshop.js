import workshop from "../models/Workshop.js"

const create = async (req, res) => {
    try{
        const content= await workshop.create(req.body);
        res.status(201).json(content);
    }catch(error){
        res.status(400).send("ERRO AO CRIAR LOCADORA");
    }
}

const index = async (req, res) => {
    try{
        const content = await workshop.find(req.query).exec();
        res.json(content);
    }catch(error){
        res.status(400).send(error);
    }
}

const show = async (req, res) => {
    try{
        const content = await workshop.findById(req.params.id).exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao mostrar");
    }
}

const update = async (req, res) => {
    try{
        const content = await workshop.findByIdAndUpdate(
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
        const content = await workshop.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao deletar");
    }
}

export default {
    create,
    index,
    show,
    update,
    destroy
}