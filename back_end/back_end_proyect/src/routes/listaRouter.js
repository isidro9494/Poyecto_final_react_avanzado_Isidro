import express from 'express';
import { getAllDonutsController, crearDonutsController, deleteDonutController } from '../controllers/listaDonutsController.js';

const router = express.Router();

router.get('/', getAllDonutsController);
router.post('/', crearDonutsController);
router.delete("/:id", deleteDonutController);


export default router; 




