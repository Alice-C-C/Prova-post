import db from "../config/db.js"
 
const VehicleSchema = db.Schema({
    plate: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year:{
        type:Number,
        required:true
    },
    owner :{
        type: String,
        required: true,
    },
    maintenances:{
        type: [db.Schema.Types.ObjectId],
        ref:"Maintenance"
    }
})

const Vehicle = db.model("Vehicle", VehicleSchema);
export default Vehicle