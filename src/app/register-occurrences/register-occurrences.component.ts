import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Occurrence } from '../../classes/occurrence';
import { OccurencesService } from './occurences.service';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { SpinnerComponent } from '../spinner/spinner.component';
import { DataServiceService } from '../data-service.service';

@Component({
    selector: 'app-register-occurrences',
    templateUrl: './register-occurrences.component.html',
    styleUrls: ['./register-occurrences.component.css']
})
export class OccurrencesRegisterComponent implements OnInit {

    occurrence: Occurrence = {
        id:0,
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
    podeEditar: boolean;

    dialogRef: MatDialogRef<SpinnerComponent, any>;

    similaridades: any[];

    constructor(
        private router: Router,
        private occurrenceService: OccurencesService,
        public snackBar: MatSnackBar,
        public dialog: MatDialog,
        private dataService: DataServiceService) { }

    ngOnInit() {
        this.occurrence = this.dataService.ocorrencia;
        this.podeEditar = this.dataService.podeEditar;
    }

    openSpinner() {

        this.snackBar.open('Aguarde...');
    }

    closeSpinner() {
        this.snackBar.dismiss();
    }

    save() {

        this.openSpinner();

        this.occurrenceService.save(this.occurrence).subscribe(
            data => {

                this.closeSpinner();

                this.router.navigate(["ocorrencia"]);

                this.snackBar.open('Salvo com sucesso ! Que tal gerar um recomendação ?', 'X', {
                    duration: 3000
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

        this.occurrenceService.getSimilaridade(description, this.occurrence.id).subscribe(
            data => {
                if (data.length) {
                    this.closeSpinner();
                    this.openDialog(data);
                }
                else {
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
        dialogConfig.data = {similaridades:data, ocorrenciaID:this.occurrence.id};
        //dialogConfig.height = '90%';
        dialogConfig.width = '80%';
        dialogConfig.disableClose = true;
        dialogConfig.hasBackdrop = true;

        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, dialogConfig);

        dialogRef.backdropClick().subscribe(() => {
            dialogRef.close();
        })

        dialogRef.afterClosed().subscribe(data => {
            console.log('The dialog was closed', dialogConfig.data);
        });
    }

    deletar(ocorrenciaId) {
        this.occurrenceService.deletar(ocorrenciaId).subscribe(
            data => {
                this.router.navigate(['ocorrencia']);
                this.closeSpinner();
                this.snackBar.open('Registro apagado com sucesso!', 'X', {
                    duration: 3000,
                });
            },
            err => {
                this.closeSpinner()
                this.snackBar.open('Ocorreu um erro ao apagar o registro.', 'X', {
                    duration: 3000,
                });
            }
        )
    }

}

@Component({
    selector: 'modal',
    templateUrl: 'modal.html',
})
export class DialogOverviewExampleDialog {

    similaridades: any[] = [];
    participantesCrime: number[] = [];
    ocorrenciaID: number;

    constructor(
        private snackbar: MatSnackBar,
        private service: OccurencesService,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) data) {
        this.similaridades = data.similaridades;
        this.ocorrenciaID = data.ocorrenciaID
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    salvar() {
        this.similaridades.forEach(element => {
            if(element.participouCrime){
                this.participantesCrime.push(element.criminoso.id);
            }
        });

        let req = {
            criminososId: this.participantesCrime,
            ocorrenciaId: this.ocorrenciaID
        }

        this.snackbar.open('Aguarde...');

        this.service.associarCrime(req).subscribe(
            data => {
                this.snackbar.dismiss();
                this.dialogRef.close();
            },
            err => {
                this.snackbar.open('Ocorreu um erro na solicitação.' + err, 'X', {
                    duration: 3000,
                });
            }
        )
    }

}
