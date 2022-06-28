import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { PersonaService } from 'src/app/services/persona.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  usuarioAdm:Usuario= new Usuario();
  usuarioEnc:Usuario= new Usuario();
  persona:Persona = new Persona();
  rolAdm:Rol= new Rol();
  rolEnc:Rol= new Rol();
  constructor(private loginService:LoginService,
              private rolService:RolService,
              private personaService:PersonaService) {
    this.cargarDatos();
  }

  cargarDatos(){
    this.persona.nombre="super";
    this.persona.apellido="super";
    this.persona.dni=999999;
    this.persona.email="super@gmail.com";
    this.persona.legajo="999";
    
    this.rolAdm.nombreRol="ADMINISTRADOR";
    this.rolEnc.nombreRol="ENCARGADO";

    this.usuarioAdm.username="admin";
    this.usuarioAdm.password="admin";
    this.usuarioAdm.rol=this.rolAdm;
    this.usuarioAdm.persona=this.persona;
    
    this.usuarioEnc.username="encargado";
    this.usuarioEnc.password="encargado";
    this.usuarioEnc.rol=this.rolEnc;
    this.usuarioEnc.persona=this.persona;

  }

  async crearRolPorDefecto(rol:Rol){
    this.rolService.createRol(rol).subscribe(
      result=>{
        console.log("rol creado por defecto");
      },
      error=>{
        console.log(error.msg);
      }
    )
  }

  async crearPersonaPorDefecto(persona:Persona){
    this.personaService.createPersona(persona).subscribe(
      result=>{
        console.log("persona creado por defecto");
      },
      error=>{
        console.log(error.msg);
      }
    )
  }

  async crearUsuario(usuario:Usuario){
    this.loginService.createUser(usuario).subscribe(
      result=>{
        console.log("usuario creado por defecto");
      },
      error=>{
        console.log(error.msg);
      }
    )
  }
  async crearUsuariosPorDefecto(){
   await this.crearRolPorDefecto(this.rolAdm);
   await this.crearRolPorDefecto(this.rolEnc);
   await this.crearPersonaPorDefecto(this.persona);
   await this.crearUsuario(this.usuarioAdm);
   await this.crearUsuario(this.usuarioEnc);
    
  }
  
  ngOnInit(): void {
  }

}
