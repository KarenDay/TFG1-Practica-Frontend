import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuncioFormComponent } from './components/anuncio/anuncio-form/anuncio-form.component';
import { MisAnunciosComponent } from './components/anuncio/mis-anuncios/mis-anuncios.component';
import { AreaEncargadosComponent } from './components/area/area-encargados/area-encargados.component';
import { AreaComponent } from './components/area/area/area.component';
import { LoginComponent } from './components/login/login.component';

import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { PersonaFormUsuarioComponent } from './components/persona/persona-form-usuario/persona-form-usuario.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RolPersonasComponent } from './components/rol/rol-personas/rol-personas.component';
import { RolComponent } from './components/rol/rol/rol.component';

const routes: Routes = [
  {path:'rol',component:RolComponent},
  //{path:'rol-personas/:id',component:RolPersonasComponent},
  {path:'persona',component:PersonaComponent},
  {path:'persona-form/:id',component:PersonaFormComponent},
  //{path:'usuario-form/:id',component:PersonaFormUsuarioComponent},
  {path:'area',component:AreaComponent},
  {path:'area-encargados/:id',component:AreaEncargadosComponent},
  {path:'mis-anuncios',component:MisAnunciosComponent},
  {path:'anuncio-form',component:AnuncioFormComponent},
  {path:'login',component:LoginComponent},
  {path:'index',component:PrincipalComponent},
  {path:'**',pathMatch:'full',redirectTo:'index'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
