import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {HttpClientModule} from '@angular/common/http';
import { PokeApiServiceService } from './poke-api-service.service';
import { PokedetailComponent } from './pokedetail/pokedetail.component';
import { PokeShareInfoService } from './poke-share-info.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [
    PokeApiServiceService,
    PokeShareInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
