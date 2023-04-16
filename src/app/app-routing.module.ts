import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StrashipsComponent } from './components/straships/straships.component';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StrashipsComponent },
  { path: 'starships/:id', component: StarshipCardComponent }, // Ruta con parámetro de ID
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Ruta para el registro
  { path: '**', redirectTo: '' } // Ruta para redireccionar en caso de ruta no encontrada
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
