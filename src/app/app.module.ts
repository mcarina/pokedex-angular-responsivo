import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeNavComponent } from './components/poke-nav/poke-nav.component';
import { PokeListService } from './service/poke-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PokeListComponent,
    PokeCardComponent,
    PokeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
