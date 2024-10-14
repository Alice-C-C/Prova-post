import mongoose from "mongoose"
import e from "express"
import "dotenv/config"
import workshop from "./routers/workshop.js"
import vehicle from "./routers/vehicle.js"
import maintenance from "./routers/maintenance.js"


const app=e()

app.use(e.json())

app.use("/workshop", workshop)
app.use("/vehicle", vehicle)
app.use("/maintenence", maintenance)

const PORT=3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });