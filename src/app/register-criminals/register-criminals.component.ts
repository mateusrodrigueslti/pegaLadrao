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
        name: '',
        dateOfBirth: '',
        rg: '',
        cpf: '',
        occupation: '',
        gender: '',
        maritalStatus: '',
        phone: '',
        address: {
            cep: '',
            address: '',
            city: '',
            complement: '',
            neighborhood: '',
            uf: ''
        }
    };

    constructor(private router: Router, private criminalService: CriminalsService, public snackBar: MatSnackBar) { }

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
