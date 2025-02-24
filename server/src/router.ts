import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */
import program from "./modules/program/programActions";
router.get("/api/programs", program.browse);
router.get("/api/programs/:id", program.read);
router.put("/api/programs/:id", program.edit);
router.post("/api/programs", program.add);
router.delete("/api/programs/:id", program.destroy);

/* ************************************************************************* */
import categoryAction from "./modules/category/categoryAction";
// import programActions from "./modules/program/programActions";
router.get("/api/categories", categoryAction.browse);
router.get("/api/categories/:id", categoryAction.read);
export default router;
