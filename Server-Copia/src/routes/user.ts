import { Router } from "express";
import { loginUser, newUser } from "../controllers/user";


const router = Router();

router.post('/', newUser);
router.post('/login', loginUser);
// router.get('/login', getUsers)


export default router;