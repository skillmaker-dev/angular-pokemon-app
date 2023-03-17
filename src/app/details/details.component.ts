import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon-card/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(private pokemonService : PokemonService, private route : ActivatedRoute, private router : Router) {}
pokemon?: Pokemon;

ngOnInit(){
  this.getDetails();
}

getDetails()
{
  let id = Number(this.route.snapshot.paramMap.get('id'))
  this.pokemonService.getPokemonById(id).subscribe({next : p => this.pokemon = p, error: () => this.router.navigate(['/not-found'])});
}
}
