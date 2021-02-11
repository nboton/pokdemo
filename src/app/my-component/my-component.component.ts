import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  
  id: string='';
  selectedPokeId:string='';
  searchPokeName:string='';
  pokes: Pokemon[]=[];

  constructor() {
    this.pokes.push(new Pokemon("1","ditto"));
    this.pokes.push(new Pokemon("2","limber 2"));
    this.pokes.push(new Pokemon("3","imposter 3"));
    this.pokes.push(new Pokemon("4","metal-powder 4"));
    this.pokes.push(new Pokemon("5","quick-powder"));
   }

  ngOnInit(): void {
  }

}
