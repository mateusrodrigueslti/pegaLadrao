import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private appComponent: AppComponent) { }

    ngOnInit() {
        
    }
    
    sendMeToCriminosos() {
        this.appComponent.opened = true;
        this.router.navigate(['criminosos']);
    }

    sendMeToOcorrencia() {
        this.appComponent.opened = true;
        this.router.navigate(['ocorrencia']);
    }

}
