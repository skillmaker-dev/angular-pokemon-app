import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingRouteComponent } from '../listing-route/listing-route.component';
import { AboutRouteComponent } from '../about-route/about-route.component';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { DetailsComponent } from '../details/details.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes = [{
  path: '',
  component: ListingRouteComponent
},
{
  path: 'about',
  component: AboutRouteComponent
},
{
  path: 'create',
  component: PokemonFormComponent
},
{
  path: 'edit/:id', 
  component: PokemonFormComponent},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: '**',
  component: NotFoundComponent
},
{
  path: 'not-found',
  component: NotFoundComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
