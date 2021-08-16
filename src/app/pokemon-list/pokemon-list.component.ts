import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../model/Pokemon.model';
import { Type } from '../model/Type.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input('pokemon')
  public pokemons: Pokemon[];

  constructor(public pokemonService: PokemonService,) { 
    
  }

  ngOnInit(): void {
  }

  


}
