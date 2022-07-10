import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './componenets/update-profile/update-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { UserProfileComponent } from './user-profile.component';
import { DevisUserComponent } from '../devis-user/devis-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    UpdateProfileComponent,
    UserProfileComponent,
    DevisUserComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    Ng2SearchPipeModule,
  ],
  exports:[UserProfileRoutingModule]
})
export class UserProfileModule { }
