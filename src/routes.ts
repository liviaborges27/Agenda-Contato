import type { Request, Response } from "express";
import express from "express";
import ContatoController from "./controller/ContatoController.js";


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({mensagem: "Aplicação online.",
        timestamp: `${new Date().toLocaleString('pt-br')}` });
    })

    router.get('/api/contato', ContatoController.todos);
export {router};