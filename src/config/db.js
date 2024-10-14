import mongoose, { connect } from "mongoose"
import "dotenv/config"

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb://localhost:27017/banco`
        );
        console.log("Conectado ao MongoDB")
        
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB()

export default mongoose