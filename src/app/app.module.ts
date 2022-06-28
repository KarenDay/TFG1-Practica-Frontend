import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DataTablesModule } from "angular-datatables";
import { PersonaComponent } from './components/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { AreaComponent } from './components/area/area/area.component';
import { AreaEncargadosComponent } from './components/area/area-encargados/area-encargados.component';
import { RolPersonasComponent } from './components/rol/rol-personas/rol-personas.component';
import { RolComponent } from './components/rol/rol/rol.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { UtilComponent } from './components/util/util.component';
import { PersonaFormUsuarioComponent } from './components/persona/persona-form-usuario/persona-form-usuario.component';
import { MisAnunciosComponent } from './components/anuncio/mis-anuncios/mis-anuncios.component';
import { AnuncioFormComponent } from './components/anuncio/anuncio-form/anuncio-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonaComponent,
    PersonaFormComponent,
    AreaComponent,
    AreaEncargadosComponent,
    RolPersonasComponent,
    RolComponent,
    LoginComponent,
    PrincipalComponent,
    UtilComponent,
    PersonaFormUsuarioComponent,
    MisAnunciosComponent,
    AnuncioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
