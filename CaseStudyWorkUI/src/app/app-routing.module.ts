import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NaviComponent } from './components/navi/navi.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:NaviComponent},
  {path:"users", component:UserComponent},
  {path:"users/:id",component:UserComponent},
  {path:"add-user", component:AddUserComponent},
  {path:"update-user/:id", component:UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
