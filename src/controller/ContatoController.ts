import Contato from "../model/Contato.js";
import type { Request, Response } from "express";
class ContatoController extends Contato {

    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            const listarContatos: Array<Contato> = await Contato.listarContatos() ?? [];
             return res.status(200).json(listarContatos);
            
        } catch (error) {
             console.error(`Erro ao consultar modelo. ${error}`);
             return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de contatos." });
            
        }
    }


}

export default ContatoController;