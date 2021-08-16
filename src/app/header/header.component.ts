import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../model/Pokemon.model';
import { Generation } from '../model/Url.enum';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }
  public pokemons: Pokemon[] = [];
  private pokemonFilter :  Pokemon[] = [];
  
  ngOnInit(): void {
    this.pokemons = this.pokemonService.findAll(environment.baseUrl + Generation.Kanto);
    this.pokemonFilter = this.pokemons;
  }

  getGen( generation : string ): void{
    this.pokemons = [];
    this.pokemonFilter = [];
    this.pokemons = this.pokemonService.findAll(environment.baseUrl + Generation[generation]);
    this.pokemonFilter = this.pokemons;
  }

  filterPokemon(event: any): void { 
    if(event.target.value){
      this.pokemons = this.pokemonFilter;
      this.pokemons = this.pokemons.filter( pokemon => pokemon.name.includes(event.target.value.toLowerCase()));
    }else{
      this.pokemons = this.pokemonFilter;
    }
  }

}
