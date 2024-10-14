import db from "../config/db.js"
import Vehicle from "../controllers/Vehicle.js";

const servicesSchema = db.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    }

})
const maintenanceSchema = db.Schema({
    workshop: {
        type: db.Schema.Types.ObjectId,
        required: true,
        ref: "Workshop"
    },
    vehicle: {
        type: db.Schema.Types.ObjectId,
        required: true,
        ref:"Vehicle"
    },
    services: [servicesSchema],
    date :{
        type: Date,
        required: true,
    },
    totalCost:{
        type: Number,
        required:true
    }
})

const Maintenance = db.model("Maintenance", maintenanceSchema);
export default Maintenance