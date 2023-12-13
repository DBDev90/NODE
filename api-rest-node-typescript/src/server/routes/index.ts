import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get('/', (_, res) => {
    return res.send('Conectado!');
});

router.post('/', (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };