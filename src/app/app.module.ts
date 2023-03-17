import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { EditableElementComponent } from './editable-element/editable-element.component';
import { DebugMessagesComponent } from './debug-messages/debug-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { RoutingModule } from './routing/routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    EditableElementComponent,
    DebugMessagesComponent,
    PokemonFormComponent,
    ListingRouteComponent,
    AboutRouteComponent,
    NavigationComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
