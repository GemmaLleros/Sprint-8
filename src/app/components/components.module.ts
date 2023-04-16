// Importaciones de librerías externas
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
// Importaciones de módulos internos
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { StrashipsComponent } from './straships/straships.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    StrashipsComponent,
    StarshipCardComponent,
    LoginComponent,
  ],
  exports: [
    HomeComponent,
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
