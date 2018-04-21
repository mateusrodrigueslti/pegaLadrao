import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SpinnerComponent } from "./spinner/spinner.component";

@Injectable()
export class Interceptor implements HttpInterceptor {


    dialogRef: MatDialogRef<SpinnerComponent, any>;


    constructor(public dialog: MatDialog) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        let handleObs: Observable<HttpEvent<any>> = next.handle(req);

        this.openSpinner();

        handleObs.subscribe(
            data => {
                if (data instanceof HttpResponse) {
                    this.closeSpinner();

                }
            }, err => {
                this.closeSpinner();
            })

        return handleObs;
    }

    openSpinner() {
        this.dialogRef = this.dialog.open(SpinnerComponent, {
            height: '300px',
            disableClose: true
        });

        console.log('eu')
    }

    closeSpinner() {
        console.log('fechei')
        this.dialogRef.close();
    }
}