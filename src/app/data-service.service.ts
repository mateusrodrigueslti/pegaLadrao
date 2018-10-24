import { Injectable } from '@angular/core';
import { Person } from '../classes/person';
import { Occurrence } from '../classes/occurrence';

@Injectable()
export class DataServiceService {

    criminoso: Person;
    ocorrencia: Occurrence;
    podeEditar: boolean;
    constructor() { }

    limparDados() {
        this.podeEditar = false;
        this.criminoso = {
            id:0,
            nome: "",
            dataNascimento: "",
            rg: "",
            cpf: "",
            profissao: "",
            genero: "",
            estadoCivil: "",
            celular: "",
            nomePai: "",
            nomeMae: "",
            nacionalidade: "",
            naturalidade: "",
            padraoAtuacaoCriminal: "",
            endereco: {
                logradouro: "",
                cep: "",
                complemento: "",
                bairro: "",
                cidade: "",
                uf: ""
            }
        };

        this.ocorrencia = {
            id:0,
            endereco: {
                logradouro: "",
                cep: "",
                complemento: "",
                bairro: "",
                cidade: "",
                uf: ""
            },
            descricao: "",
            data: "",
            hora: ""
        };
    }

}
