import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {

  constructor(private httpclient:HttpClient) { }



  getPokemons():Observable<any>{
    return this.httpclient.get("https://pokeapi.co/api/v2/pokemon/");
  }
}
