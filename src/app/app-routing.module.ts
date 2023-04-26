import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { AuthGuard } from './components/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  { path:'starships',component:StarshipsComponent,canActivate:[AuthGuard]},
  { path:'starships/:id',component:StarshipCardComponent,canActivate:[AuthGuard]}, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Ruta para el registro
  { path: '**', redirectTo: '' } // Ruta para redireccionar en caso de ruta no encontrada
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
