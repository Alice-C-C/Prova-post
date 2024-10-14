import vehicle from "../models/Vehicle.js"

const create = async (req,res)=> {
    try{
        const content = await vehicle.create(req.body);
        res.status(201).json(content);
    }catch(error){
        console.log(req.body)
        res.status(400).send("Erro ao criar veículo");
    }
}

const index = async (req, res) => {
    try{
        const content = await vehicle.find(req.query).populate("maintenances").exec();
        res.json(content);
    }catch(error){
        res.status(400).send(error);
    }
}

const show = async (req, res) => {
    try{
        const content = await vehicle.findById(req.params.id).populate('maintenances').exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao mostrar");
    }
}

const update = async (req, res) => {
    try{
        const content = await vehicle.findByIdAndUpdate(
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
        const content = await vehicle.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    }catch(error){
        res.status(400).send("Erro ao deletar");
    }
}

export default {create, index, show, update, destroy}