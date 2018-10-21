import { Address } from "./address";
import { CriminalPattern } from "./criminalPattern";

export class Person {
    id: number;
    nome: String;
    padraoAtuacaoCriminal: String;
    dataNascimento: string;
    rg: string;
    cpf: string;
    profissao: string;
    genero: string;
    estadoCivil: string;
    celular: string;
    nomeMae: string;
    nomePai: string;
    nacionalidade: string;
    naturalidade: string;
    endereco: Address;
}