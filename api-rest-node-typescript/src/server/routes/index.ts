import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Conectado!');
});

router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create);

export { router };