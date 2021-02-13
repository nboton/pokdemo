import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetail, PokeServiceRes } from './pokemon';
const url="https://pokeapi.co/api/v2/pokemon/";

@Injectable({
  providedIn: 'root'
})

export class PokeApiServiceService {

  constructor(private httpclient:HttpClient) { }



  getPokemons():Observable<PokeServiceRes>{
    return this.httpclient.get<PokeServiceRes>(url);
  }
  getPokemonInfo(id:string):Observable<PokeDetail>{
    return this.httpclient.get<PokeDetail>(url+id+"/");
  }
}
