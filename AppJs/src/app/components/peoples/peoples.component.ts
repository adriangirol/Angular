import { Component, OnInit, ViewChild } from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PeoplesService, People } from '../../services/peoples.service';

import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
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
export class PeoplesComponent implements OnInit {
  eliminado:number = undefined;
  peoples: People[] = [];
  idx:number = undefined;
  @ViewChild('abc') abc:string;
  constructor(private _peoplesService: PeoplesService, private _router:Router, private _activatedRoute : ActivatedRoute) {
    console.log("Constructor");
      this._activatedRoute.params.subscribe( params => {
          let filtro : String = params['paramFiltro'];

          if( filtro != undefined)
          {
            console.log(filtro);
            this.peoples = this._peoplesService.buscarPeople(filtro);
          }

    } );
   }

  ngOnInit() {
    console.log("ngOnInit");
    if(this.peoples.length < 1)
    {
      this.peoples = this._peoplesService.getPeoples();
      console.log(this.peoples);
    }
  }

  verPeople(idx:number){
    this._router.navigate(['/People', idx]);
  }
  setIdx(id:number){
    console.log("Escribiendo idx");
    this.idx = id;
    console.log(this.idx);
  }
  DeletePeople(){
    this.eliminado = this._peoplesService.deletePeople(this.idx);
    this.peoples = this._peoplesService.getPeoples();
    setTimeout(function() {
       this.eliminado = 1;
       //console.log(this.edited);
   }.bind(this), 2500);
  }
  EditPeople(idx:number){
    this._router.navigate(['/NewPeople', idx]);
  }


}
