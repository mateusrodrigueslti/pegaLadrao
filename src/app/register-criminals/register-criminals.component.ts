import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../classes/person';
import { CriminalsService } from './criminals.service';
import { MatSnackBar, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DataServiceService } from '../data-service.service';
import { log } from 'util';

@Component({
    selector: 'app-register-criminals',
    templateUrl: './register-criminals.component.html',
    styleUrls: ['./register-criminals.component.css']
})

export class CriminalsRegisterComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    person: Person = {
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
    podeEditar: boolean;
    crimes: any[];
    dataSource;
    displayedColumns = ["Data", "Hora", "Fato"];
    temCrime: boolean;


    constructor(
        private router: Router,
        private criminalService: CriminalsService,
        private snackBar: MatSnackBar,
        private dataService: DataServiceService) { }

    ngOnInit() {
        this.person = this.dataService.criminoso;
        this.podeEditar = this.dataService.podeEditar;

        if(this.podeEditar){
            this.buscarCrimes(this.person.id)
        }
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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

    closeSpinner() {
        this.snackBar.dismiss();
    }

    deletar(criminosoId) {
        this.criminalService.deletar(criminosoId).subscribe(
            data => {
                this.router.navigate(['criminosos']);
                this.dataService.limparDados();
                this.closeSpinner();
                this.snackBar.open('Registro apagado com sucesso!', 'X', {
                    duration: 3000,
                });
            },
            err => {
                this.closeSpinner()
                this.snackBar.open('Ocorreu um erro ao apagar o registro.', 'X', {
                    duration: 3000,
                });
            }
        )
    }

    buscarCrimes(criminosoID) {

        this.criminalService.buscarCrimes(criminosoID).subscribe(
            data => {
                if(data.length){
                    this.temCrime = true;
                }                
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;

            },
            err => {
               throw err;
               
            }
        )
    }
}
