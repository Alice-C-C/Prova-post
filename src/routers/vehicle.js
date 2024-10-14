import vehicle from "../controllers/Vehicle.js"
import Router from "express"

const router = Router();

router.post("/", vehicle.create);
router.get("/", vehicle.index);
router.get("/:id", vehicle.show);
router.put("/:id",vehicle.update);
router.delete("/:id",vehicle.destroy);

export default router