import express from "express";
import { 
  createAcesso, 
  deleteAcesso, 
  getAcessoById, 
  getAllAcesso, 
  updateAcesso 
} from "controllers/Acesso";
import { auth } from "Middleware/auth";

const router = express.Router();

router.use(auth)
router.get('/', getAllAcesso);
router.post('/',createAcesso)
router.get('/:id', getAcessoById);
router.put('/:id',updateAcesso);
router.delete('/:id',deleteAcesso);
export default router;
