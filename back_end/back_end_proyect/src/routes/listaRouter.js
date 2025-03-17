import express from 'express';
import { getAllDonutsController, crearDonutsController, deleteDonutController, modifyDonutController, getDonutByIdController } from '../controllers/listaDonutsController.js';

const router = express.Router();

router.get('/', getAllDonutsController);
router.get('/:id', getDonutByIdController);
router.post('/', crearDonutsController);
router.delete("/:id", deleteDonutController);
router.put('/:id', modifyDonutController)


export default router; 




