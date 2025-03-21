
import { OrderController } from '../controller/order.controller';
import { UserController } from '../controller/user.controller';
import { Router } from 'express';

const router = Router();

router.post('/create', (req, res) => { UserController.registerCustomer(req, res) });
router.post('/orders', (req, res) => { OrderController.getOrders(req, res) });
router.post('/spent', (req, res) => { OrderController.getSpent(req, res) });

export default router;