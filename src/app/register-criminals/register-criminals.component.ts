import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../../classes/person';
import { CriminalsService } from './criminals.service';
import { MatSnackBar } from '@angular/material';
import { DataServiceService } from '../data-service.service';

@Component({
    selector: 'app-register-criminals',
    templateUrl: './register-criminals.component.html',
    styleUrls: ['./register-criminals.component.css']
})

export class CriminalsRegisterComponent implements OnInit {

    person: Person = {
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
        endereco:{
            logradouro: "",
            cep: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: ""
        }
    };

    constructor(
        private activatedRoute: ActivatedRoute, 
        private router: Router, 
        private criminalService: CriminalsService, 
        private snackBar: MatSnackBar,
        private dataService: DataServiceService) { }

    ngOnInit() {
        this.person = this.dataService.criminoso;
    }

    sendMeToHome() {
        this.router.navigate(['home']);
    }

    save() {
        
        this.snackBar.open('Aguarde...');

        this.criminalService.save(this.person).subscribe(
            data => {
                this.snackBar.open('Salvo com sucesso!', 'X', {
                    duration: 3000,
                });
                this.dataService.limparDados();
                this.router.navigate(['criminosos']);
            },
            err => console.error(err)
        )
    }

}
