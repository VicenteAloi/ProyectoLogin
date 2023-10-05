import { Router } from "express";
import { getCustomer, getAdmins, loginUser, newUser } from "../controllers/user";


const router = Router();

router.post('/', newUser);
router.post('/login', loginUser);
router.get('/admin', getAdmins);
router.get('/login/:email', getCustomer)


export default router;