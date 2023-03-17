import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon-card/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {
  form : FormGroup;
  isCreate : boolean = false;
  isLoading: boolean = false;
  constructor(private fb : FormBuilder, private route : ActivatedRoute, private pokemonService : PokemonService, private router : Router) {
    this.form = this.fb.group({
      id : 0,
      name: ['',[Validators.minLength(5)]],
      description : '',
      image : '',
      attack: 0,
      defense: 0,
      hasEvolution: 'true',
      types:[],
      captured: '',
    })

    
  }

  ngOnInit()
  {
    this.route.url.subscribe(url => url[0].path == 'create' ? this.isCreate = true : this.isCreate = false)
    if(!this.isCreate)
    {
      let id = Number(this.route.snapshot.paramMap.get("id"));
      this.pokemonService.getPokemonById(id).subscribe(pokemon => this.form.setValue({...pokemon}) );
      
      
    }
  }


  
  onSubmit()
  {
    this.isLoading = true; 
    
    if(this.isCreate)
    {
      if(this.form.valid)
      {  
        this.form.disable()
        this.pokemonService.createPokemon(this.form.value).subscribe(() => {this.isLoading = false; this.form.enable(); this.router.navigateByUrl("/")});
      }
      else {
        this.isLoading = false;
        this.form.enable();
      }
    }else{
      if(this.form.valid)
      {  
        this.form.disable()
        this.pokemonService.updatePokemon(this.form.value).subscribe(() => {this.isLoading = false; this.form.enable(); this.router.navigateByUrl("/")});
      }
      else {
        this.isLoading = false;
        this.form.enable();
      }
    }
    
  }

  inputIsInvalid(name : string) : boolean
  {
    return  (this.form.controls[name].dirty || this.form.controls[name].touched) && this.form.controls[name].invalid;
  }
}
