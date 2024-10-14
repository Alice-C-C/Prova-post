import workshop from "../controllers/Workshop.js"
import Router from "express"
import adress from "../middlewares/cep_adress.js"

const router = Router();

router.post("/",adress, workshop.create);
router.get("/", workshop.index);
router.get("/:id", workshop.show);
router.put("/:id",workshop.update);
router.delete("/:id",workshop.destroy);

export default router