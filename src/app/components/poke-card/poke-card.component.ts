import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
  @Input() pokemon: string =''

  @Input() 
  'numero': number;

  imgPokemon(){
    const Formatado = this.leadingZero(this.numero );

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${Formatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
