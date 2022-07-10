import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfileComponent } from './componenets/update-profile/update-profile.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { path : '' , component : UserProfileComponent, 
  children:[
    { path : 'update_user/:_id', component : UpdateProfileComponent},
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
