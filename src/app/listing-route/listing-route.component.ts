import { Component } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Pokemon } from '../pokemon-card/pokemon.model';
import { DebugService } from '../services/debug.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-listing-route',
  templateUrl: './listing-route.component.html',
  styleUrls: ['./listing-route.component.css']
})
export class ListingRouteComponent {
  constructor(private debugService : DebugService,private pokemonService : PokemonService) {}
  pokemons : Pokemon[] = [];
  private searchValues = new BehaviorSubject<string>('')

  ngOnInit()
  {
    this.searchValues.pipe(debounceTime(500),distinctUntilChanged()).subscribe(name =>  this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))))
  }


  searchByName(term : string)
  {
    this.searchValues.next(term);
  }

  ngOnDestroy()
  {
    console.log('Component destroyed')
  }

  capture(pokemon: Pokemon)
  {
    this.pokemonService
    .updatePokemon({...pokemon, captured: !pokemon.captured})
    .subscribe((updatedPokemon) => {
      this.pokemons = this.pokemons.map(p => {
        if(p.id === updatedPokemon.id)
        {
          return updatedPokemon;
        }
        return p;
      })
    })
  }

  changeValue(event : any)
  {
    
    const { value, key, pokemon} = event;
    this.pokemonService.updatePokemon({...pokemon, [key]: value})
    .subscribe((updatedPokemon) => {
        this.pokemons = this.pokemons.map((p) =>{
          if(p.id === updatedPokemon.id)
            return updatedPokemon;
          return p;
        })
    })
  }

  deletePokemon(id : number)
  {
    this.pokemonService.deletePokemon(id).subscribe(() => {
      this.pokemons = this.pokemons.filter(p => p.id!== id);

    })
  }

  log(value: any)
  {
    const str = `A new value has been added: ${JSON.stringify(value)}`
    this.debugService.addMessage(str);
  }
}
