import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeoplesService, People } from '../../services/peoples.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  people : people = {};

  constructor(private _activatedRoute : ActivatedRoute, private _servicepeoples : PeoplesService ) {

    this._activatedRoute.params.subscribe( params => {
      this.people = this._servicepeoples.getPeople(params['id']);
    } );

   }

  ngOnInit() {
  }

}
