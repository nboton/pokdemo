import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeApiServiceService } from '../poke-api-service.service';
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

  constructor(private pokApiService:PokeApiServiceService) {
    
   }

  ngOnInit(): void {
    this.pokApiService.getPokemons().subscribe((data) => {
      data.results.forEach((e:any, index:any)=>{
        this.pokes.push(new Pokemon(index,e.name,e.url));
      });
    });
  }

  go(){
    console.log(this.selectedPokeId)
  }

}
