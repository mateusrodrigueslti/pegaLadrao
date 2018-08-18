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
        name: 'Mateus Rodrigues de Oliveira',
        dateOfBirth: '27041994',
        rg: '3974983',
        cpf: '10700938400',
        occupation: 'Analista Desenvolvedor',
        gender: 'Masculino',
        maritalStatus: 'Solteiro',
        phone: '83996552547',
        mothersName: 'Joece Mara Correa Rodrigues',
        fathersName: 'Jose Lusimario de Oliveira',
        nationality: 'Brasileiro',
        naturalness: 'Alvorada',
        criminalPattern:'ssss',
        address: {
            cep: '58135000',
            address: 'Alfredo Régis',
            city: 'Esperanã',
            complement: '',
            neighborhood: 'Centro',
            uf: 'PB'
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
