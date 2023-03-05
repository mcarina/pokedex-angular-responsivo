import { Component } from '@angular/core';
import { PokeListService } from 'src/app/service/poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {

  constructor(public PokeListService: PokeListService) {}
}
