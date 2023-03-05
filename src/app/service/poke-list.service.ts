import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.PokemonOrginais()
   }

   async PokemonOrginais() {
   const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();

    this.pokemons = requisicao.results;

}
  }
