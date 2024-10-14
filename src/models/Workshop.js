import db from "../config/db.js"
 
const WorkshopSchema = db.Schema({
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: Object,
        required: true,
    },
    numero:{
        type:Number
    },
    specialties :{
        type: [String],
        required: true,
    },
})

const Workshop = db.model("Workshop", WorkshopSchema);
export default Workshop