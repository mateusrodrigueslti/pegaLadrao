import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

//Angular Material Components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIconModule, MatDatepickerModule, MatDatepicker, MAT_DATE_LOCALE, MatNativeDateModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
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
import { OccurrencesRegisterComponent } from './register-occurrences/register-occurrences.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CriminalsService } from './register-criminals/criminals.service';
import { Interceptor } from './interceptor';
import { SpinnerComponent } from './spinner/spinner.component';




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
        MatProgressSpinnerModule
    ],
    providers: [
        CriminalsService,
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }],
    bootstrap: [AppComponent],
    entryComponents: [SpinnerComponent]
})
export class AppModule { }
