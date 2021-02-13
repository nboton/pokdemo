export interface PokeServiceRes {
  count:     number;
  next: string;
  previous: null;
  results:Ipokemon[];
}
export interface Ipokemon {
  name:     string;
  url: string;
}

export class Pokemon {
    /**
     * 
     * @param id 
     * @param name 
     * @param url
     */
    constructor(
        public id: string,
        public name: string,
        public url:string
       
      ) {}
}
