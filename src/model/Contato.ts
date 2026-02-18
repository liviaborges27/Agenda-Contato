import { DatabaseModel } from "./DatabaseModel.js";
//import { ContatoDTO } from "../interface/ContatoDTO.js";

const database = new DatabaseModel().pool;
class Contato {
    private idContato: number = 0;
    private nome: string;
    private telefone: string;
    private email: string;
    private endereco: string;
    private aniversario: Date;
    private situacao: boolean = true;

    constructor(
        _nome: string,
        _telefone?: string,
        _email?: string,
        _endereco?: string,
        _aniversario?: Date,
    ) {
        this.nome = _nome;
        this.telefone = _telefone || '';
        this.email = _email || '';
        this.endereco = _endereco || '';
        this.aniversario = _aniversario || new Date('1900-01-01');



    }
    public getIdContato(): number {
        return this.idContato;
    }
    public setIdContato(_idContato: number): void {
        this.idContato = _idContato;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    public getTelefone(): string {
        return this.telefone;
    }
    public setTelefone(_telefone: string): void {
        this.telefone = _telefone;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(_email: string): void {
        this.email = _email;
    }
    public getEndereco(): string {
        return this.endereco;
    }
    public setEndereco(_endereco: string): void {
        this.endereco = _endereco;
    }
    public getAniversario(): Date {
        return this.aniversario;
    }
    public setAniversario(_aniversario: Date): void {
        this.aniversario = _aniversario;
    }
    public getSituacao(): boolean {
        return this.situacao;
    }
    public setSituacao(_situacao: boolean): void {
        this.situacao = _situacao;
    }

    static async listarContatos(): Promise<Array<Contato> | null> {
        try {
            let listaDeContatos: Array<Contato> = [];
            const querySelectContatos = `SELECT * FROM contatos WHERE situacao = TRUE;`;
            const respostaBD = await database.query(querySelectContatos);

            respostaBD.rows.forEach((contatoBD) => {
                const novoContato: Contato = new Contato(
                    contatoBD.nome,
                    contatoBD.email,
                    contatoBD.endereco,
                    contatoBD.aniversario,
                )

                novoContato.setIdContato(contatoBD.idContato);
                novoContato.setSituacao(contatoBD.situacao);

                listaDeContatos.push(novoContato);

            });

            return listaDeContatos;
        } catch (error) {
            console.log(`Erro na consulta com o banco de dados. ${error}`);
            return null;
        }

    }
}
export default Contato;