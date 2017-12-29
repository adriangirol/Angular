import { Component, OnInit } from '@angular/core';
import { PeoplesService, People } from '../../services/peoples.service';
import { Router , ActivatedRoute } from '@angular/router';

//animate
import {trigger, transition, style, animate, state} from '@angular/animations';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-newpeople',
  templateUrl: './newpeople.component.html',
  animations: [
      trigger(
        'myAnimation',
        [
          transition(
          ':enter', [
            style({transform: 'translate3d(-100%, 0, 0)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translate3d(0, 0, 0)', 'opacity': 1}),
            animate('500ms', style({transform: 'translateX(-100%)', 'opacity': 0}),

          ]
        )]
      )
    ]
})
export class NewpeopleComponent implements OnInit {

  id= undefined; //Solo si viene en _accion Edit;
  _accion = "New";
  control = new Control();
  img:string = "assets/img/";
  //Por defecto
  sexos= ["-- Seleccionar --","Hombre", "Mujer"];

  categorias = ["-- Seleccionar --","Madre","Padre","Familiar","Herman@","Novi@","Amig@","Otr@"];

  people = new People("" ,"",this.img, "-- Seleccionar --", "-- Seleccionar --" );

  constructor(private _peoplesService: PeoplesService ,private _router:Router, private _activatedRoute : ActivatedRoute) {
    //console.log("Constructor");
      this._activatedRoute.params.subscribe( params => {
          this.id = String = params['id'];
         if(this.id != undefined){

           this.people = this._peoplesService.getPeople(this.id);
           this._accion = "Edit";
           this.people.img = this.img;
           //console.log(this.people);
        }
      }
    }

  ngOnInit() {
    //console.log(this.people);
  }

  setNewPeople(){
    this.control.errorDescription = [];
    this.validar();
    if(this.control.flash == 0){
      console.log("Loading people..." + this.people);
      if(this.people.sexo == "Mujer")
      {
        this.people.img = this.people.img + "woman.png";
      }
      else
      {
        this.people.img = this.people.img + "men.png";
      }

      switch(this._accion)
      {
        case "New":

          console.log("new");
          this.control.flash =  this._peoplesService.setPeople(this.people);
         break;
        case "Edit":
          console.log("edit");
          console.log(this.people);
          this.control.flash =  this._peoplesService.putPeople(this.people ,this.id);
        break;
      }
      setTimeout(function() {
         this.control.flash = undefined;
         //console.log(this.edited);
     }.bind(this), 2500);

    }
    else{
      this.control.flash = 1;
    }
  }

  validar(){

    if(this.people.nombre == ""){ this.control.errorDescription.push( "Error en Nombre.") ;}
    if(this.people.apellidos == ""){this.control.errorDescription.push("Error en Apellidos.") ;}
    if(this.people.categoria == "-- Seleccionar --"){this.control.errorDescription.push("Error en Categoria.") ;}
    if(this.people.sexo == "-- Seleccionar --"){  this.control.errorDescription.push(`Error en Sexo.`) ;}

    if(this.control.errorDescription.length > 0){ this.control.flash = 1 ;}else{this.control.flash = 0 ;}
    return this.control;

  }

}

export class Control{

    flash: number;
    errorDescription : string [] = [];
    /*constructor(mensaje : string ){
      this.errorDescription = mensaje;
    }*/
}
