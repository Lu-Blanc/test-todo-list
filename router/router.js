import { Router } from "express";
import { create, deleteById, getAll, getOne, update } from "../controller/controllerActivity.js";

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.patch('/:id',update);
router.delete('/:id',deleteById);

export default router;
