import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }
public stringVar=new Subject<string>()
  value!: string;

  getValue():string{
    return this.value
  }
  getObservable():Subject<string>{
    return this.stringVar
  }
  /*setValue(value:string){
    this.value=value;
  }*/
  setValue(value:string){
    this.stringVar.next(value);
  }
}
