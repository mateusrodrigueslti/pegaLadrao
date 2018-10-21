import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CriminalsService } from '../register-criminals/criminals.service';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';


@Component({
    selector: 'app-criminosos',
    templateUrl: './criminosos.component.html',
    styleUrls: ['./criminosos.component.css']
})
export class CriminososComponent implements OnInit {
    
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = ["nome", "rg","cpf"];

    constructor(
        private criminalService: CriminalsService, 
        private router: Router,
        private dataService: DataServiceService) {}

    ngOnInit() {
        this.criminalService.getAll().subscribe(
            data => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            err => console.error(err)
        );
    }

    editarDetalhes(criminoso){
        this.dataService.podeEditar = true;
        this.dataService.criminoso = criminoso;
        this.router.navigate(['criminals']);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    novoCriminoso(){
        this.dataService.limparDados();
        this.router.navigate(['criminals']);
    }

}
