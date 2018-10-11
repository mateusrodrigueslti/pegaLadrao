import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { OccurrencesRegisterComponent } from '../register-occurrences/register-occurrences.component';
import { RecommendationGenerateComponent } from '../generate-recommendation/generate-recommendation.component';
import { CriminalsRegisterComponent } from '../register-criminals/register-criminals.component';
import { CriminososComponent } from '../criminosos/criminosos.component';
import { OcorrenciasComponent } from '../ocorrencias/ocorrencias.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'occurrences', component: OccurrencesRegisterComponent },
    { path: 'criminals', component: CriminalsRegisterComponent },
    { path: 'recommendation', component: RecommendationGenerateComponent },
    { path: 'criminosos', component: CriminososComponent },
    { path: 'ocorrencia', component: OcorrenciasComponent },
    { path: '**', component: PageNotFoundComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule { }
