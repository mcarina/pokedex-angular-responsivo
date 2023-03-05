import { Component } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-poke-nav',
  templateUrl: './poke-nav.component.html',
  styleUrls: ['./poke-nav.component.css']
})
export class PokeNavComponent {
  faSearch = faSearch;
  searchTerm: string =''
}
