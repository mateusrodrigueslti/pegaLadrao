import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { OccurencesService } from '../register-occurrences/occurences.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ocorrencias',
    templateUrl: './ocorrencias.component.html',
    styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = ["descricao", "data", "hora"];

    constructor(private occurencesService : OccurencesService, private router: Router) { }

    ngOnInit() {
        this.occurencesService.getAll().subscribe(
            data => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            err => console.error(err)
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    novaOcorrencia(){
        this.router.navigate(['occurrences']);
    }

}
