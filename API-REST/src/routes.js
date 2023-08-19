import { Router } from "express";
import SelecaoController from './app/controllers/SelecaoController.js';

const router = Router()

router.get('/selecoes', SelecaoController.index)
router.get('/selecoes/:id', SelecaoController.show )
router.post('/selecoes', SelecaoController.store)
router.put('/selecoes/:id', SelecaoController.uptdate)
router.delete('/selecoes/:id', SelecaoController.delete)

export default router