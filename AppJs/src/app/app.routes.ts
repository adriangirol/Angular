
import { RouterModule , Routes } from '@angular/router';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleComponent } from './components/people/people.component';
import { NewpeopleComponent } from './components/newpeople/newpeople.component';

const APP_ROUTES : Routes = [
    { path: 'Peoples', component: PeoplesComponent },
    { path: 'People/:id', component: PeopleComponent },
    { path: 'NewPeople', component: NewpeopleComponent },
    { path: 'NewPeople/:id', component: NewpeopleComponent },
    { path: 'Peoples/:paramFiltro', component: PeoplesComponent },
    { path: '**' , pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
