import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
