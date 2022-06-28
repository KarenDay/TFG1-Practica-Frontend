import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { Rol } from 'src/app/models/rol';
import { PersonaService } from 'src/app/services/persona.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol-personas',
  templateUrl: './rol-personas.component.html',
  styleUrls: ['./rol-personas.component.css']
})
export class RolPersonasComponent implements OnInit {

  personas:Array<Persona>=new Array<Persona>();
  rol!:Rol;
  dni!:number;
  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private personaService:PersonaService,
              private rolService:RolService) 
  { }

  agregarPersona(persona:Persona){
    
  }

  obtenerRol(id:string){
    this.rol= new Rol();
    this.rolService.getRol(id).subscribe(
      result=>{
        Object.assign(this.rol,result);
      },
      error=>{
        console.log(error.msg);
      }
      
    )
  }

  buscarPorDni(){
    this.personas= new Array<Persona>();
    this.personaService.getPersonaByDni(this.dni).subscribe(
      result=>{
        
        result.forEach((item:any) => {
          var persona = new Persona(); 
          Object.assign(persona,item);
          this.personas.push(persona);
        });
        
      },
      error=>{
        console.log(error.msg);
      }
    )
  }

  volver(){
    this.router.navigate(["rol"]);
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
          this.obtenerRol(params['id']);
    });
  }

}
