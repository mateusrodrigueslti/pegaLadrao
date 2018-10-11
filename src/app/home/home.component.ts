import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    sendMeToCriminalsRegister() {
        this.router.navigate(['criminals']);
    }

    sendMeToOccurrences() {
        this.router.navigate(['occurrences']);
    }

    sendMeToRecommendentions() {
        this.router.navigate(['recommendation']);
    }

    sendMeToCriminosos() {
        this.router.navigate(['criminosos']);
    }

    sendMeToOcorrencia() {
        this.router.navigate(['ocorrencia']);
    }

}
