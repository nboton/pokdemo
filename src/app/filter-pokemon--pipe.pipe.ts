import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe', pure:false
})
export class FilterPokemonPipePipe implements PipeTransform {

  /**
* 
* @param value la fonction prend en entree un tableau sur lequel il doit filtrer (value:any[])
* @param property un premier argument qui est la propriétéproperty?: string
* @param searchString une donnée qui est qu'est elle est la valeur qu'on va rechercher dans le tableau
*/
  transform(value: any[], property: string, searchString: string): any {
    if (typeof value !== 'undefined') {//si le tableau de valeur n'est pas vide, on va filtrer sur
      return value.filter((e) => { //disant en ne regardant ceux dont la propriété de cette objet e[propriete] en ne passant à tout leur
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
