import mongoose, { connect } from "mongoose"
import "dotenv/config"

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`
        );
        console.log("Conectado ao MongoDB")
        
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB()

export default mongoose