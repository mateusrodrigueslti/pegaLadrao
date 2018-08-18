import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Occurrence } from '../../classes/occurrence';
import { OccurencesService } from './occurences.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-register-occurrences',
    templateUrl: './register-occurrences.component.html',
    styleUrls: ['./register-occurrences.component.css']
})
export class OccurrencesRegisterComponent implements OnInit {

    occurrence: Occurrence = {
        description: '',
        address: {
            cep: '',
            address: '',
            city: '',
            complement: '',
            neighborhood: '',
            uf: ''
        }
    };

    constructor(
        private router: Router, 
        private occurrenceService: OccurencesService,
        public snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    sendMeToHome() {
        this.router.navigate(['home']);
    }

    save() {
        this.occurrenceService.save(this.occurrence).subscribe(
            data => {
                this.snackBar.open('Salvo com sucesso!', 'X', {
                    duration: 3000,
                });
            },
            err => console.error(err)
        )
    }


}
