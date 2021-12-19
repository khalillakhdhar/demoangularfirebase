import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { CongesComponent } from './conges/conges.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"users" , component:UsersComponent},
  {path:"conges", component:CongesComponent},
  {path:"**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
