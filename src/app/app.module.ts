import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIconModule, MatDatepickerModule, MAT_DATE_LOCALE, MatNativeDateModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

//My Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './router/router-routing.module';
import { HomeComponent } from './home/home.component';
import { RecommendationGenerateComponent } from './generate-recommendation/generate-recommendation.component';
import { CriminalsRegisterComponent } from './register-criminals/register-criminals.component';
import { OccurrencesRegisterComponent, DialogOverviewExampleDialog } from './register-occurrences/register-occurrences.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CriminalsService } from './register-criminals/criminals.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { OccurencesService } from './register-occurrences/occurences.service';
import { GenerateRecommendationService } from './generate-recommendation/generate-recommendation.service';

import {NgxMaskModule} from 'ngx-mask';
import { CriminososComponent } from './criminosos/criminosos.component'
import {MatPaginatorModule, 
    MatSortModule, MatTableModule } from "@angular/material";
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        HomeComponent,
        RecommendationGenerateComponent,
        CriminalsRegisterComponent,
        OccurrencesRegisterComponent,
        SpinnerComponent,
        DialogOverviewExampleDialog,
        CriminososComponent,
        OcorrenciasComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        RoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        NgxMaskModule.forRoot({})
    ],
    providers: [
        CriminalsService,
        OccurencesService,
        GenerateRecommendationService,
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        ],
    bootstrap: [AppComponent],
    entryComponents: [SpinnerComponent, DialogOverviewExampleDialog]
})
export class AppModule { }
