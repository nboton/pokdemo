import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeApiServiceService } from '../poke-api-service.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],

})
export class MyComponentComponent implements OnInit {
  
  id: string='';
  selectedPokeId:string='';
  searchPokeName:string='';
  pokes: Pokemon[]=[];
  pokeDetail!: PokeDetail;

  constructor(private pokApiService:PokeApiServiceService,
              private pokeShareInfoService:PokeShareInfoService) {
    
   }

  ngOnInit(): void {
    this.pokeShareInfoService.setValue(this.selectedPokeId);
    this.pokApiService.getPokemons().subscribe((data) => {
      data.results.forEach((e:any, index:any)=>{
        this.pokes.push(new Pokemon(index,e.name,e.url));
      });
    });
  }

  go(){
    if(this.selectedPokeId!=''){
      this.pokApiService.getPokemonInfo(this.selectedPokeId).subscribe((data)=>
      this.pokeDetail=data);
      this.pokeShareInfoService.setValue(this.selectedPokeId)
    }
   
  }

}
