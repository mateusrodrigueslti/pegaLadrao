import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-criminals',
    templateUrl: './register-criminals.component.html',
    styleUrls: ['./register-criminals.component.css']
})
export class CriminalsRegisterComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    sendMeToHome() {
        this.router.navigate(['home']);
    }

}
