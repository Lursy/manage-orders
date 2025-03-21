import { Router } from 'express';
import { ProductController } from '../controller/product.controller';

const router = Router();

router.post('/create', (req, res) => { ProductController.registerProduct(req, res) });

export default router;