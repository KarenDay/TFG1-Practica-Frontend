import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Rol } from '../models/rol';
import { Usuario } from '../models/usuario';
import { LoginService } from './login.service';
import { PersonaService } from './persona.service';
import { RolService } from './rol.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  usuarioAdm:Usuario= new Usuario();
  usuarioEnc:Usuario= new Usuario();
  persona:Persona = new Persona();
  rolAdm:Rol= new Rol();
  rolEnc:Rol= new Rol();
  rol:Rol= new Rol();
  idPersona!:string;
  constructor(private loginService:LoginService,
              private rolService:RolService,
              private personaService:PersonaService) {
    this.cargarDatos();
  }

  cargarDatos(){
    
    this.rolAdm.nombreRol="ADMINISTRADOR";
    this.rolEnc.nombreRol="ENCARGADO";

    this.persona.nombre="super";
    this.persona.apellido="super";
    this.persona.dni=999999;
    this.persona.email="super@gmail.com";
    this.persona.legajo="999";
    
    this.usuarioAdm.username="admin";
    this.usuarioAdm.password="admin";
    this.usuarioAdm.rol=this.rolAdm;
    this.usuarioAdm.persona=this.persona;

    // this.usuarioEnc.username="encargado";
    // this.usuarioEnc.password="encargado";
    // this.usuarioEnc.rol=this.rolEnc;
    // this.usuarioEnc.persona=this.persona;

  }

  async crearRolPorDefecto(rol:Rol){
    this.rolService.createRol(rol).subscribe(
      result=>{
        console.log("rol creado por defecto");
        this.buscarRol(this.rolAdm.nombreRol);
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
  async buscarRol(nombre:string){
    this.rol= new Rol();
    this.rolService.getRolByNombre(nombre).subscribe(
      result=>{
          console.log("Rol encontrado: "+result);
          Object.assign(this.rol,result);
          this.persona.roles.push(this.rol);
      },
      error=>{
        console.log(error.msg);
      }
    )
  }
  async buscarPersonaPorDni(){
    console.log("entro a buscar dni");
    this.personaService.getPersonaByDni(this.persona.dni).subscribe(
      result=>{
        result.forEach((item:any) => {
          Object.assign(this.idPersona,item._id);  
          console.log("id de la persona encontrada:"+item._id);
        });
        
      },
      error=>{
        console.log(error.msg);
      }
    )
  }
  async agregarRolesAPersona(rol:Rol){
    this.personaService.addRol(rol,this.idPersona).subscribe(
      result=>{
       console.log("roles agregados a personas");
      },
      error=>{
        console.log(error.msg);
      }
    )
  }
  async crearUsuariosPorDefecto(){
   await this.crearRolPorDefecto(this.rolAdm);
   await this.crearRolPorDefecto(this.rolEnc);
   //await this.buscarRol(this.rolAdm.nombreRol);
   await this.crearPersonaPorDefecto(this.persona); 
   await this.crearUsuario(this.usuarioAdm);
   
   //await this.agregarRolesAPersona(this.rol);

    
  }
  
}
