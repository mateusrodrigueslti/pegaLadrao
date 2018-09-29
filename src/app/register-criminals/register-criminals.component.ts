import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../classes/person';
import { CriminalsService } from './criminals.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MatSnackBar } from '@angular/material';

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

    constructor(private router: Router, private criminalService: CriminalsService, private snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    sendMeToHome() {
        this.router.navigate(['home']);
    }

    getAll() {
        this.criminalService.getAll().subscribe(
            data => {
                console.log(data)
            },
            err => console.error(err)
        );
    }

    save() {
        
        this.snackBar.open('Aguarde...');

        this.criminalService.save(this.person).subscribe(
            data => {
                this.snackBar.open('Salvo com sucesso!', 'X', {
                    duration: 3000,
                });
            },
            err => console.error(err)
        )
    }

}
