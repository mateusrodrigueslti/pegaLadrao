import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenavModule, MatSidenavContainer } from '@angular/material';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { log } from 'util';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    @ViewChild('sidenav') sidenav: MatSidenavModule;
    @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

    navMode = 'side';
    opened: boolean = true;
    rotas: any[] = [
        { label: "Início", path: "/inicio", icone: "home" },
        { label: "Criminosos", path: "/criminosos", icone: "face" },
        { label: "Ocorrências", path: "/ocorrencia", icone: "description" }
    ]
    escondeMenu: boolean = false;

    constructor(public router: Router) {
        router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {

                if (event.url === "/login" || event.url === "/") {

                    this.escondeMenu = false;
                }
                else {
                    this.escondeMenu = true;
                }

                if (window.innerWidth < 768) {
                    this.opened = false;
                }
            });
    }

    toggleSideBar() {
        this.opened = !this.opened;
    }

    ngOnInit() {
        if (window.innerWidth < 768) {
            this.opened = false;
            this.navMode = 'over';
        }
    }

    logout() {
        this.router.navigate(['login'])
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navMode = 'over';
            this.opened = false;
            // this.sidenavContainer.close();
        }
        if (event.target.innerWidth > 768) {
            this.navMode = 'side';
            this.opened = true;
            // this.sidenavContainer.open();
        }
    }

}
