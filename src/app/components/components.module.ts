// Importaciones de librerías externas
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
// Importaciones de módulos internos
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { LoginComponent } from './login/login.component';
import { StarshipsComponent } from './starships/starships.component';



@NgModule({
  declarations: [
    HomeComponent,
    StarshipCardComponent,
    LoginComponent,
    StarshipsComponent 
  ],
  exports: [
    HomeComponent,
    StarshipsComponent
  ],
  imports: [
    NgbModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
