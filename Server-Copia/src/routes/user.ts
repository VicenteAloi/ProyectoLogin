import { Router } from "express";
import { getUser, getUsers, loginUser, newUser } from "../controllers/user";


const router = Router();

router.post('/', newUser);
router.post('/login', loginUser);
router.get('/login', getUsers);
router.get('/login/:email', getUser)


export default router;