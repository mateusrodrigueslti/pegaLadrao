import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-occurrences',
    templateUrl: './register-occurrences.component.html',
    styleUrls: ['./register-occurrences.component.css']
})
export class OccurrencesRegisterComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    sendMeToHome() {
        this.router.navigate(['home']);
    }


}
