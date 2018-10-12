import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Occurrence } from '../../classes/occurrence';
import { OccurencesService } from './occurences.service';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { log } from 'util';
import { SpinnerComponent } from '../spinner/spinner.component';
import { DataServiceService } from '../data-service.service';

@Component({
    selector: 'app-register-occurrences',
    templateUrl: './register-occurrences.component.html',
    styleUrls: ['./register-occurrences.component.css']
})
export class OccurrencesRegisterComponent implements OnInit {

    occurrence: Occurrence = {
        endereco: {
            logradouro: "",
            cep: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: ""
        },
        descricao: "",
        data: "",
        hora: ""
    };

    dialogRef: MatDialogRef<SpinnerComponent, any>;

    constructor(
        private router: Router, 
        private occurrenceService: OccurencesService,
        public snackBar: MatSnackBar,
        public dialog: MatDialog,
        private dataService: DataServiceService) { }

    ngOnInit() {
        this.occurrence = this.dataService.ocorrencia;
    }

    openSpinner() {
        
        this.snackBar.open('Aguarde...');
    }

    closeSpinner() {
        this.snackBar.dismiss();
    }

    sendMeToHome() {
        this.router.navigate(['home']);
    }

    save() {

        this.openSpinner();
        
        this.occurrenceService.save(this.occurrence).subscribe(
            data => {
                
                this.closeSpinner();

                this.snackBar.open('Salvo com sucesso ! Que tal gerar um recomendação ?', 'X', {
                    duration: 3000,
                });
            },
            err => {
                this.closeSpinner();
                console.error(err)

            }
        )
    }

    gerarSimilaridade(description) {

        this.openSpinner();

        this.occurrenceService.getSimilaridade(description).subscribe(
            data => {
                if(data.length){
                    this.closeSpinner();
                    this.openDialog(data);
                }
                else{
                    this.closeSpinner();
                    this.snackBar.open('Não há dado suficientes para realizar uma análise', 'X', {
                        duration: 3000,
                    });
                }
            },
            err => this.closeSpinner()
        )
    }

    openDialog(data) {
        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    
        dialogConfig.data = data;
    
        this.dialog.open(DialogOverviewExampleDialog, dialogConfig);
    }

}

@Component({
    selector: 'modal',
    templateUrl: 'modal.html',
  })
  export class DialogOverviewExampleDialog {
  
    similaridades: any[] = [];

    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) data) {
        this.similaridades = data;
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
