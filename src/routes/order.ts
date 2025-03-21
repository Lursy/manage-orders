
import { OrderController } from '../controller/order.controller';
import { Router } from 'express';

const router = Router();

router.post('/create', (req, res) => { OrderController.createOrder(req, res) });
router.post('/get', (req, res) => { OrderController.listOrders(req, res) });

export default router;