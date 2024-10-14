import maintenance from "../controllers/Maintenance.js"
import Router from "express"

const router = Router();

router.post("/", maintenance.create);
router.get("/", maintenance.index);
router.get("/:id", maintenance.show);
router.put("/:id",maintenance.update);
router.delete("/:id",maintenance.destroy);

export default router