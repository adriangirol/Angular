import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { FormsModule } from '@angular/forms';
//Servicios
import { PeoplesService } from './services/peoples.service';
//Rutas

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleComponent } from './components/people/people.component';
import { PresentsComponent } from './components/presents/presents.component';
import { PresentComponent } from './components/present/present.component';
import { NewpeopleComponent } from './components/newpeople/newpeople.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PeoplesComponent,
    PeopleComponent,
    PresentsComponent,
    PresentComponent,
    NewpeopleComponent,
    DomseguroPipe
  ],
  imports: [
   BrowserModule,
   APP_ROUTING,
   FormsModule,
   BrowserAnimationsModule
 ],
  providers: [PeoplesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
