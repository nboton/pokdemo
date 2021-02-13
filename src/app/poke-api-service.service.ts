import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceRes } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {

  constructor(private httpclient:HttpClient) { }



  getPokemons():Observable<PokeServiceRes>{
    return this.httpclient.get<PokeServiceRes>("https://pokeapi.co/api/v2/pokemon/");
  }
}
